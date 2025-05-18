import { Router } from "express";
import { DeliveryLogsController } from "@/controllers/delivery-logs-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorizarion } from "@/middlewares/verifyUserAuthorization";

const deliveryLogsRoutes = Router();
const deliveryLogsController = new DeliveryLogsController();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorizarion(["sale"]),
  deliveryLogsController.create
);

export { deliveryLogsRoutes };
