import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User from "../models/User";
const jwt = require("jsonwebtoken");

export default {
    async create(request: Request, response: Response) {
        //desestruturar o corpo da requisição (JSON)
        console.log(request.body);

        const { login, senha } = request.body;

        const userRepository = AppDataSource.getRepository(User);

        const user = userRepository.create({
            login,
            senha,
        });

        await userRepository.save(user);

        return response.status(201).json(user);
    },
    async findAll(request: Request, response: Response) {
        const userRepository = AppDataSource.getRepository(User);

        //Buscar tudo
        const users = await userRepository.find();

        response.status(200).json(users);
    },
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const userRepository = AppDataSource.getRepository(User);

        const user = await userRepository.findOneBy({
            id: +id,
        });

        if (user) {
            await userRepository.remove(user);
            response.status(204).json(user);
        } else {
            response.status(404).json();
        }
    },
    async login(request: Request, response: Response) {
        //desestruturacao
        const { login, senha } = request.body;
    
        const userRepository = AppDataSource.getRepository(User);
        //Verificação somente para testes (substituir)
        const user = userRepository.findOneBy({
            login: login,
            senha: senha
        });
    
        if (await user) {
            const payload = {
                login: login
            }
          const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: 300, // expires in 5min
          });
    
          return response.status(200).json({
            token: token,
          });
        }
        return response.status(500).json({ message: "Login inválido!" });
      },
};