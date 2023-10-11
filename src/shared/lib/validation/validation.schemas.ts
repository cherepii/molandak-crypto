import {z} from "zod"
import {INCORRECT_EMAIL, REQUIRED_FIELD} from './validation.errors';

export const EMAIL_SCHEMA = z.string({required_error: REQUIRED_FIELD}).nonempty(INCORRECT_EMAIL).email(INCORRECT_EMAIL).trim()
export const NAMING_SCHEMA = z.string({required_error: REQUIRED_FIELD}).nonempty(INCORRECT_EMAIL).trim()
