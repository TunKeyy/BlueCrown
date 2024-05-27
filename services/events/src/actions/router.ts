import { DailyTask, Router } from "shared";

const router: Router = Router();

router.get("/daily-tasks", async (_, res) => {
  try {
    const dailyTasks = await DailyTask.findAll({});
    console.log(dailyTasks);
    return res.json(dailyTasks);
  } catch (error) {
    return res.json(error);
  }
});

export { router };
