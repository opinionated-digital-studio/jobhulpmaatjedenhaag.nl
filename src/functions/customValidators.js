import { helpers } from "vuelidate/lib/validators";

export const postcode = helpers.regex("postcode", /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i);

