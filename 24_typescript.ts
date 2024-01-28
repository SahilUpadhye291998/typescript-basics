function LogClass(target: Function){
    console.log("==================================")
    console.log(`Class ${target.name} is decorated`)
    console.log(target);
    console.log("==================================")
}

@LogClass
class ExampleClass {
    // class logic here
    constructor(
        private input: number
    ){}
}

console.log('======================================')
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${key} is called with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} execution result: ${result}`);
        return result;
    };

    return descriptor;
}

class MethodDecoratorClass {
    @logMethod
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}

const exampleInstance = new MethodDecoratorClass();
exampleInstance.greet("John");

console.log("-----------------------------------")

// Property decorator
function logProperty(target: any, key: string) {
    let value = target[key];
  
    const getter = function () {
      console.log(`Getting value of property ${key}: ${value}`);
      return value;
    };
  
    const setter = function (newValue: any) {
      console.log(`Setting value of property ${key} to: ${newValue}`);
      value = newValue;
    };
  
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
  
  class PropertyLoggerClass {
    @logProperty
    message: string = "Hello, TypeScript!";
  }
  
  const propertyInstance = new PropertyLoggerClass();
  console.log(propertyInstance.message); // Logs the getter
  propertyInstance.message = "Updated Message"; // Logs the setter
  