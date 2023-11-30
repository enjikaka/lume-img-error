import lume from "lume/mod.ts";
import picture from "lume/plugins/picture.ts";
import imagick from "lume/plugins/imagick.ts";

const site = lume();

site.use(picture());
site.use(imagick());

export default site;
