import db from '../models/_sequelize_setup_.js'

export async function getAllVolee(){
  return await db.users.findAll(); 
}

export async function getVoleeById(pId){
  return await db.users.findByPk(pId);
}

export async function createVolee(pEntity){
  return await db.users.create(pEntity);
}

export async function deleteVolee(pId){
  return await db.users.destroy({
    where: { id: pId }
  })
}

export async function updateVolee(pId, pUpdatedEntity){
  return await db.users.update(pUpdatedEntity, {
    where: { id: pId }
  });
}

export async function findByUserId(pUserId){
  return await db.users.findOne({
    where: { userId: pUserId}
  });
}


export async function isUserExistingByEmail(pEmail){
const emailAcount= await db.users.count({
    where: { email: pEmail}
  });
  return emailAcount == 0 ? false :true;
}


