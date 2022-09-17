import db from '../models/_sequelize_setup_.js'

export async function getAllNoneProfitOrg(){
  return await db.noneProfitOrg.findAll(); 
}

export async function getNoneProfitOrgById(pId){
  return await db.noneProfitOrg.findByPk(pId);
}

export async function createNoneProfitOrg(pEntity){
  return await db.noneProfitOrg.create(pEntity);
}

export async function deleteNoneProfitOrg(pId){
  return await db.noneProfitOrg.destroy({
    where: { id: pId }
  })
}

export async function updateNoneProfitOrg(pId, pUpdatedEntity){
  return await db.noneProfitOrg.update(pUpdatedEntity, {
    where: { id: pId }
  });
}







