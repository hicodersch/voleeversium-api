import express from 'express';
const router = express.Router();
import * as userService from '../persistency/noneProfitOrg-repository.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.getAllNoneProfitOrg())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.getNoneProfitOrgById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.createNoneProfitOrg(req.body))));

router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await userService.updateNoneProfitOrg(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await userService.deleteNoneProfitOrg(req.params.id))));


export default router;

