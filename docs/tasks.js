module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Tasks"],
                summary: "Create task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                content: {
                    "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Task",
                    },
                    },
                },
                },
                responses: {
                201: {
                    description: "Task successfully created",
                },
                500: {
                    description: "There was a problem trying to create a task",
                },
                },
            }
        },
        "/": {
            get:{
                tags: ["Tasks"],
                summary: "Get all tasks",
                operationId: "getTasks",
                parameters: [],
                responses: {
                  200: { description: "Tasks obtained" },
                  500: { description: "There was a problem trying to find tasks" },
                },
            },
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: ["Tasks"],
                summary: "Update task status",
                operationId: "updateTaskStatus",
                parameters: [
                  {
                    name: "_id",
                    in: "path",
                    schema: {
                      $ref: "#/components/schemas/Task/properties/_id",
                    },
                    description: "Id of Task to be updated",
                  },
                ],
                responses: {
                  200: { description: "Task successfully updated" },
                  500: { description: "There was a problem trying to update the task with _id: " },
                },
              }, 
        },
        "/id/{_id}": {
            put: {
              tags: ["Tasks"],
              summary: "Update task title",
              operationId: "updateTitleTask",
              parameters: [
                {
                  name: "_id",
                  in: "path",
                  schema: {
                    $ref: "#/components/schemas/Task/properties/_id",
                  },
                  description: "Id of Task to be updated",
                },
              ],
              requestBody: {
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Task" },
                  },
                },
              },
              responses: {
                200: { description: "Task successfully updated" },
                500: { description: "There was a problem with the task with _id number" },
              },
            },
            get: {
                tags: ["Tasks"],
                summary: "Get task by id",
                operationId: "getTaskById",
                parameters: [
                  {
                    name: "_id",
                    in: "path",
                    schema: {
                      $ref: "#/components/schemas/Task/properties/_id",
                    },
                    description: "Id of Task to obtain",
                  },
                ],
                responses: {
                  200: { description: "Task obtained" },
                  500: { description: "There was a problem with the task with _id number" },
                },
            },
            delete: {
                tags: ["Tasks"],
                summary: "Delete task by id",
                operationId: "deleteTaskById",
                parameters: [
                  {
                    name: "_id",
                    in: "path",
                    schema: {
                      $ref: "#/components/schemas/Task/properties/_id",
                    },
                    description: "Id of Task to obtain",
                  },
                ],
                responses: {
                  200: { description: "Task deleted" },
                  500: { description: "There was a problem trying to delete a task" },
                },
            }
        },
    },
};
  