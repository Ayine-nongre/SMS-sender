import { DataTypes } from "sequelize";
import { db } from "../config/database";
import { User } from "./user";

const Message = db.define(
    'messages',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        recipient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Delivered', 'Failed'),
            allowNull: false
        },
        sender_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    }
)

Message.belongsTo(User, { foreignKey: 'sender_id' })
User.hasMany(Message, { foreignKey: 'sender_id' })

