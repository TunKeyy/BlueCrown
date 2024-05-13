import { Router } from "../../../shared/dist";
import { getBasicData } from "./controller";

const router: Router = Router();

router.get("/actions", getBasicData);

export { router };
