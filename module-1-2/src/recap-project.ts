type priority = "low" | "medium" | "hight";
type TaskObj = {
  readonly id: number;
  title: string;
  priority: priority;
  description?: string;
  tags?: string[];
};

type Rewards = {
  xp: number;
};

type AchievementTask = TaskObj & Rewards;

const task: AchievementTask[] = [];

const addAchievement = (
  id: number,
  title: string,
  xp: number,
  ...tags: string[]
): AchievementTask => {
  const newAchievement: AchievementTask = {
    id: id,
    title: title,
    priority: "medium",
    tags: tags,
    xp: xp,
  };

  task.push(newAchievement);
  const [first, second, ...rest] = tags;
  //   console.log(first, second);
  return newAchievement;
};

addAchievement(1, "level 2 start", 1, "critical thinking", "typescript");
addAchievement(2, "level 2 start", 1, "critical thinking", "typescript");
addAchievement(3, "level 2 start", 1, "critical thinking", "typescript");
addAchievement(3, "level 2 start", 1, "critical thinking", "typescript");

// console.log(task);

type FindTask = (id: number) => AchievementTask | null;
const findTask: FindTask = (id: number) => {
  return task.find((task) => task.id === id) ?? null;
};

console.log(findTask(2));
