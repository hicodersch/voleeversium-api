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

//TODO it will be reviewed
export async function checkNoneProfitOrg(pUser) {
  const currentVolee = await db.noneProfitOrg.findOne({
    where: { email: pUser.email },
  });
  if (currentVolee.email) {
    if (currentVolee.password == pUser.password) {
      return {
        allowLogin: true,
      };
    } else {
      return {
        allowLogin: false,
      };
    }
    {
    }
  }
  return {
    allowLogin: "don't exsist",
  };
}





