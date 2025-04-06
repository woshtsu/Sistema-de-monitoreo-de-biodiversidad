import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 2244,
  password: '',
  database: 'biodiversidad_monitoring'
}

const connection = await mysql.createConnection(config)

export class animalsModel {
  static async getAll() {
    const [result, info] = await connection.query(
      `select * from Especies`
    )
    return result
  }
  static async getById({ id }) {
    const [result, info] = await connection.query(
      `select * from Especies where id = ?;`, [id]
    )
    return result
  }
  static async getByName({ name }) {
    console.log(name);

    try {
      const [result, info] = await connection.query(
        `
            SELECT 
                e.nombre_comun AS especie,
                ST_AsText(o.ubicacion) AS ubicacion_texto,
                o.fecha_observacion,
                o.descripcion
            FROM Observaciones o
            JOIN Especies e ON o.especie_id = e.id
            WHERE e.nombre_comun = ?;
            `,
        [name]
      )
      const formattedResult = result.map(row => ({
        especie: row.especie,
        ubicacion: {
          longitud: parseFloat(row.longitud),
          latitud: parseFloat(row.latitud)
        },
        fecha_observacion: row.fecha_observacion,
        descripcion: row.descripcion
      }));

      return formattedResult;
    } catch (error) {
      console.error('Error en getByName:', error);
      throw new Error('Error al buscar el animal por nombre');
    }
  }
  static async create({ input }) {

  }
  static async delete({ input }) {

  }

  static async update({ id, input }) {

  }
}