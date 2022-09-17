import express from 'express';
const router = express.Router();
import * as userService from '../persistency/proVolee-repository.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.getAllProVolee())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.getProVoleeById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.createProVolee(req.body))));

router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.updateProVolee(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await userService.deleteProVolee(req.params.id))));


export default router;

