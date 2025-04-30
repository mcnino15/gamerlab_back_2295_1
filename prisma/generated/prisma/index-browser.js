
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CriterioScalarFieldEnum = {
  id_criterio: 'id_criterio',
  nombre: 'nombre',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.Criterio_evaluacionScalarFieldEnum = {
  id_criterio: 'id_criterio',
  id_evaluacion: 'id_evaluacion',
  valoracion: 'valoracion',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.EquipoScalarFieldEnum = {
  id_equipo: 'id_equipo',
  nombre: 'nombre',
  token_captcha: 'token_captcha',
  estado_incripcion: 'estado_incripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.EvaluacionScalarFieldEnum = {
  id_evaluacion: 'id_evaluacion',
  id_usuario: 'id_usuario',
  id_videojuegos: 'id_videojuegos',
  comentario: 'comentario',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.IntegranteScalarFieldEnum = {
  id_integrante: 'id_integrante',
  id_equipo: 'id_equipo',
  primer_nombre: 'primer_nombre',
  correo: 'correo',
  usuario_github: 'usuario_github',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.Integrante_nrcScalarFieldEnum = {
  id_integrante: 'id_integrante',
  id_nrc: 'id_nrc',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.MateriaScalarFieldEnum = {
  id_materia: 'id_materia',
  nombre: 'nombre',
  codigo: 'codigo',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.NrcScalarFieldEnum = {
  id_nrc: 'id_nrc',
  id_materia: 'id_materia',
  codigo: 'codigo',
  activo: 'activo',
  id_usuario: 'id_usuario',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.PermisoScalarFieldEnum = {
  id_permiso: 'id_permiso',
  nombre: 'nombre',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.Permiso_rolScalarFieldEnum = {
  id_permiso: 'id_permiso',
  id_rol: 'id_rol',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.Permiso_servicioScalarFieldEnum = {
  id_permiso: 'id_permiso',
  id_servicio: 'id_servicio',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.Permiso_usuarioScalarFieldEnum = {
  id_permiso: 'id_permiso',
  id_usuario: 'id_usuario',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.RolScalarFieldEnum = {
  id_rol: 'id_rol',
  rol: 'rol',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.ServicioScalarFieldEnum = {
  id_servicio: 'id_servicio',
  nombre: 'nombre',
  descripcion: 'descripcion',
  url: 'url',
  metodo: 'metodo',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id_usuario: 'id_usuario',
  primer_nombre: 'primer_nombre',
  segundo_nombre: 'segundo_nombre',
  primer_apellido: 'primer_apellido',
  segundo_apellido: 'segundo_apellido',
  correo: 'correo',
  confirmado: 'confirmado',
  token_confirmacion: 'token_confirmacion',
  ultima_conexion: 'ultima_conexion',
  password: 'password',
  fecha_actualizacion: 'fecha_actualizacion',
  fecha_creacion: 'fecha_creacion',
  estado: 'estado'
};

exports.Prisma.Usuario_rolScalarFieldEnum = {
  id_usuario: 'id_usuario',
  id_rol: 'id_rol',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.VideojuegoScalarFieldEnum = {
  id_videojuego: 'id_videojuego',
  id_equipo: 'id_equipo',
  nombre: 'nombre',
  descripcion: 'descripcion',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  estado: 'estado'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  criterio: 'criterio',
  criterio_evaluacion: 'criterio_evaluacion',
  equipo: 'equipo',
  evaluacion: 'evaluacion',
  integrante: 'integrante',
  integrante_nrc: 'integrante_nrc',
  materia: 'materia',
  nrc: 'nrc',
  permiso: 'permiso',
  permiso_rol: 'permiso_rol',
  permiso_servicio: 'permiso_servicio',
  permiso_usuario: 'permiso_usuario',
  rol: 'rol',
  servicio: 'servicio',
  usuario: 'usuario',
  usuario_rol: 'usuario_rol',
  videojuego: 'videojuego'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
