import express from 'express';
const router = express.Router();
import * as proVoleeService from '../service/proVolee.service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await proVoleeService.getAllProVolee())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await proVoleeService.getProVoleeById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await proVoleeService.createProVolee(req.body))));

router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await proVoleeService.updateProVolee(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await proVoleeService.deleteProVolee(req.params.id))));


export default router;

