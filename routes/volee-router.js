import express from 'express';
const router = express.Router();
import * as voleeService from '../service/volee.service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await voleeService.getAllVolee())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await voleeService.getVoleeById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await voleeService.createVolee(req.body))));

router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await voleeService.updateVolee(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await voleeService.deleteVolee(req.params.id))));

router.post('/check', asyncHandler(async (req, res, next) => 
res.status(200).send(await voleeService.checkVolee(req.body))));


export default router;

