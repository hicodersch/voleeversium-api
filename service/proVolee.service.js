import db from '../models/_sequelize_setup_.js'

export async function getAllProVolee(){
  return await db.proVolee.findAll(); 
}

export async function getProVoleeById(pId){
  return await db.proVolee.findByPk(pId);
}

export async function createProVolee(pEntity){
  return await db.proVolee.create(pEntity);
}

export async function deleteProVolee(pId){
  return await db.proVolee.destroy({
    where: { id: pId }
  })
}

export async function updateProVolee(pId, pUpdatedEntity){
  return await db.proVolee.update(pUpdatedEntity, {
    where: { id: pId }
  });
}







