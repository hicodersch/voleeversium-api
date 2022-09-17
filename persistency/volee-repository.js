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
