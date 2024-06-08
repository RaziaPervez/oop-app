#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name:string
    constructor(n:string){
        this.name = n 
    }
}



class Person{
    students:
    Student[]=[]


    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person()


const programmStart = async(persons:Person)=>{
  do{  console.log(chalk.greenBright("welcome"))

  const ans = await inquirer.prompt({
      type:"list",
      name:"select",
      message:"With whom would you prefer to converse?",
      choices:["staff","student",]
  })

  if(ans.select=="staff"){
      console.log("you can go to the staff room.")
      console.log("but, first you have to take permission")
  }
  if(ans.select=="student"){
      const ans = await inquirer.prompt({
          type:"input",
          name:"student",
          message:"To which student would you like to engage in conversation?"
      })

      const student = persons.students.find(val => val.name == ans.student)
      if(!student){
          const name = new Student(ans.student)
          persons.addStudent(name)


          console.log(chalk.yellowBright(`hello i am ${name.name},or i am fine`))
          console.log(persons.students)
      }
       
      if(student){
          console.log(chalk.yellowBright(`hello i am ${student.name  },or i am fine`))
          console.log(persons.students)
      }
   }}
  while(true)

}
programmStart(persons)