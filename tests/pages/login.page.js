const { expect } = require('@playwright/test');

require('dotenv').config();
class LoginPage{


constructor(page){
this.page = page
}

async dashBoard(){
   const products = this.page.getByLabel('Username')
   const count = await products.count()

   for(let i=0; i < count; ++i ){
     while(await products.nth(i).locator('div a div').textContent() === name)  {
     await products.nth(i).locator('text=Add to cart').click()
     break
     }
   }
  await this.page.on('dialog',dialog=>dialog.accept())

  this.value = this.page.locator('#displayed-text').isVisible() // true or false
  while(this.value){
// fill
break
  }

}

//cicd - continous integration and continious development


































































































async loginUser(){
    const name = 'Sauce Labs Bike Light'
    await this.page.goto(process.env.BASE_URL)
    await this.page.locator('#user-name').fill(process.env.ADMIN_USERNAME)
    await this.page.locator('#password').fill(process.env.PASSWORD)
    await this.page.locator('#login-button').click()

 

// radio buttons
   await this.page.locator("[name='radioButton']").click()
console.log(await this.page.locator("[name='radioButton']").nth(2).isChecked()) // true or false
if(await this.page.locator("[name='radioButton']").nth(2).isChecked()){
//
}else{
//
}
await expect(this.page.locator("[name='radioButton']").nth(2)).toBeChecked()


// checkboxes
await this.page.locator("#checkBoxOption1").click()
await this.page.locator("#checkBoxOption1").unCheck()
console.log(await this.page.locator("#checkBoxOption1").nth(2).isChecked()) // true or false
if(await this.page.locator("#checkBoxOption1").nth(2).isChecked()){
   //
   }else{
   //
   }


   await expect(this.page.locator("#checkBoxOption1']").nth(2)).toBeChecked()
   
const dropDown = this.page.locator('#dropdown-class-example')
     await dropDown.slectOption('Option2')


     // radio button
   this.page.locator("[name='radioButton']").click()
   this.page.locator("[name='radioButton']").isChecked() //true / false
   console.log(await this.page.locator("[name='radioButton']").isChecked())

  await expect(this.page.locator("[name='radioButton']")).toBeChecked()

   if(await this.page.locator("[name='radioButton']").isChecked()){
//
   }else{
      //
   }
   this.page.locator("[name='radioButton']").nth(2).isChecked()



   //checkbox

   this.page.locator("checkBoxOption1").click()
   this.page.locator("checkBoxOption1").unCheck()

   this.page.locator("checkBoxOption1").isChecked() //true / false
   console.log(await this.page.locator("checkBoxOption1").isChecked())

  await expect(this.page.locator("checkBoxOption1")).toBeChecked()

   if(await this.page.locator("checkBoxOption1").isChecked()){
//
   }else{
      //
   }
   this.page.locator("checkBoxOption1").nth(2).isChecked()



const b = '25'

const prod = this.page.locator('#product').locator()

const a = prod.count()

for(let i=1; i<a; ++i){

 while(await prod.nth(i).locator('td td').textContent()===b){
   const courseName = await prod.nth(i).locator('td').textContent()
   console.log(courseName)
break
 }
}

//getByText
//textContent
//alltextContents
//getByPlaceHolder
//locator







// const dropDown = this.page.locator('#dropdown-class-example')
// await dropDown.selectOption('Option2')
// await this.page.locator("[name='radioButton']").click()
// console.log(await this.page.locator("[name='radioButton']").isChecked())
// //
// await expect(this.page.locator("[name='radioButton']").toBeChecked())

// await this.page.locator("#checkBoxOption1").click()
// await this.page.locator("#checkBoxOption1").uncheck()

// console.log(await this.page.locator("#checkBoxOption1").isChecked())
// //
// await expect(this.page.locator("#checkBoxOption1").toBeChecked())

}
async loginFailure(){
   await this.page.goto(process.env.BASE_URL)
    await this.page.locator('#user-name').fill('sdgfsdsdf')
    await this.page.locator('#password').fill('sdzfsdfs')
    await this.page.locator('#login-button').click()

}

}
module.exports={LoginPage}

//css - id, class, attributes, getbytext,getbylabel,getbyplaceholder
//xpath