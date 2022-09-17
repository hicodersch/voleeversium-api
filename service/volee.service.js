import db from "../models/_sequelize_setup_.js";

export async function getAllVolee() {
  return await db.volee.findAll();
}

export async function getVoleeById(pId) {
  return await db.volee.findByPk(pId);
}

export async function createVolee(pEntity) {
  return await db.volee.create(pEntity);
}
export async function updateVolee(pId, pUpdatedEntity) {
  return await db.volee.update(pUpdatedEntity, {
    where: { id: pId },
  });
}
export async function deleteVolee(pId) {
  return await db.volee.destroy({
    where: { id: pId },
  });
}
//TODO it will be reviewed
export async function checkVolee(pUser) {
  const currentVolee = await db.volee.findOne({
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
