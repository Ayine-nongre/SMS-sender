import { DataTypes } from "sequelize";
import { db } from "../config/database.js";
import { User } from "./user.js";

export const Template = db.define(
    'templates',
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
     }
)

Template.belongsTo(User, { foreignKey: 'author_id' })
User.hasMany(Template, { foreignKey: 'author_id' })