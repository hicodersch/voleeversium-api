import express from 'express';
const router = express.Router();
import * as noneProfitOrgService from '../service/noneProfitOrg.service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await noneProfitOrgService.getAllNoneProfitOrg())));

router.get('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await noneProfitOrgService.getNoneProfitOrgById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => 
res.status(200).send(await noneProfitOrgService.createNoneProfitOrg(req.body))));

router.put('/:id', asyncHandler(async (req, res, next) => 
res.status(200).send(await noneProfitOrgService.updateNoneProfitOrg(req.params.id, req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => 
res.status(200).json(await noneProfitOrgService.deleteNoneProfitOrg(req.params.id))));

router.post('/check', asyncHandler(async (req, res, next) => 
res.status(200).send(await noneProfitOrgService.checkNoneProfitOrg(req.body))));


export default router;

