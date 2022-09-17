import express from 'express';
const router = express.Router();
import * as userService from '../persistency/volee-repository.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.getAllVolee())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.getVoleeById(req.params.id))));


router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.createVolee(req.body))));

// router.post('/check', asyncHandler(async (req, res, next) => 
// res.status(200).send(await userService.checkVolee(req.body))));


router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.updateVolee(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await userService.deleteVolee(req.params.id))));


export default router;

