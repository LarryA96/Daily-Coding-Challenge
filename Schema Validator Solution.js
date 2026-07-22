/**
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

"{username: string}"

Extra keys are allowed
*/

function isValidSchema(obj) {

  return (Object.hasOwn(obj, "username") && (typeof obj.username == "string"))

}
