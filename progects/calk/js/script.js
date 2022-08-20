'use strict';
const title = document.getElementsByTagName('h1')[0]
const screenBtn = document.querySelector('.screen-btn')
const screenText = document.querySelectorAll('.screen > .main-controls__input > input')
const viewsSelect = document.getElementsByName('views-select')
const viewsSelectOption = document.querySelectorAll('.screen > .main-controls__select > select > option')
const typeText = document.querySelectorAll('input[type=text]')
const typeCheckbox = document.querySelectorAll('input[type="checkbox"]')

const cmsBtn = document.getElementById('cms-open')
const cmsVariants = document.querySelector('.hidden-cms-variants')
const cmsSelect = document.getElementById('cms-select')
const cmsOthers = document.querySelector('.hidden-cms-variants > .main-controls__input ')

const otherItesPercent = document.querySelectorAll('.other-items.percent')
const otherItesNumber = document.querySelectorAll('.other-items.number')

const rangeInput = document.querySelector('.rollback input')
const rangeValue = document.querySelector('.rollback > .main-controls__range > .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const totalInputs = document.querySelectorAll('.total-input')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCounter = document.getElementsByClassName('total-input')[3]
const totalControllBack = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    count: [],
    screenCounter: 0,
    screenPrice: 0,
    adaptive: true,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    rollback: 0,
    servicesPercent: {},
    servicesNumber: {},
    servicePrice: 0,
    init: function(){ 
        this.addTitle()
        screenBtn.addEventListener('click',  this.addScreenBlock)      
        rangeInput.addEventListener('input',  this.addPollback)
        rangeInput.addEventListener('change',  this.addPollback)
        cmsBtn.addEventListener('click', this.addCsm)

        cmsSelect.addEventListener('change', this.addCsmOther)
        startBtn.addEventListener('click',  this.start)
        reset.addEventListener('click',  this.reset)
    },
    start: function(){
        let valueNull = true
        screenText.forEach(item => { 
            if (item.value == 0 || ''){
                valueNull = false
                return valueNull
            }
        })       
        if (viewsSelect[0].value != '' && valueNull){
            appData.addScreens()
            appData.addServices()
            appData.addPrices()
            appData.showResult()

            startBtn.setAttribute('disabled', 'disabled')
            screenBtn.setAttribute('disabled', 'disabled')
            rangeInput.setAttribute('disabled', 'disabled')

            screens.forEach(screen => {
                const select = screen.querySelector('select')
                const input = screen.querySelector('input')

                select.disabled = true
                input.disabled = true
            })
            typeText.forEach(item => item.disabled = true)
            typeCheckbox.forEach(item => {
                item.disabled = true
                item.checked = false
            })    
            startBtn.style.display = 'none'
            resetBtn.style.display = 'flex' 
                

        }else{
            alert('не заполненное поле')
        } 
    },
    reset: () => {
        startBtn.style.display = 'flex'
        resetBtn.style.display = 'none'
        startBtn.removeAttribute('disabled')
        screenBtn.removeAttribute('disabled')
        rangeInput.removeAttribute('disabled')
        viewsSelect.forEach(item => {
            item.disabled = false
            item.value = ''
        })
        typeText.forEach(item => item.disabled = false)
        typeCheckbox.forEach(item => item.disabled = false)
        totalInputs.forEach(item => item.value = 0) 
        screenText.forEach(item => item.value = 0) 

        screens.forEach((item,i) => {
            if(i !== 0) {
                item.remove()
            }
        })
        screens = document.querySelectorAll(".screen")
    },
    addTitle: () => {
        document.title = title.textContent
    },
    addScreenBlock: () => {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },
    addCsm: () => {
        cmsBtn.checked ? cmsVariants.style.display = 'flex' : cmsVariants.style.display = 'none' 
    },
    addCsmOther: () => {
        for (let i = 0; i < cmsSelect.length; i++){
            if (cmsSelect[i].value == 'other'){
                cmsOthers.style.display = 'flex'
            }else
                cmsOthers.style.display = 'none'
        }
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
  
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })

            appData.count.push(+input.value)           
        })   
    }, 

    addServices: () => {
        otherItesPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]') 
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')   

            if(check.checked){
                appData.servicesPercent[label.textContent] = +input.value
            }           
        })

        otherItesNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]') 
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')   

            if(check.checked){
                appData.servicesNumber[label.textContent] = +input.value
            }           
        })
    },
    addPollback: (event) => {
        rangeValue.textContent = event.target.value
    },
    addPrices: function () {
        this.screenPrice =  this.screens.reduce((sum, current) => sum + current.price, 0)
        this.servicePricesNumber = Object.values( this.servicesNumber).reduce((sum, current) => sum + current, 0)  

        for(let key in this.servicesPercent){
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100)
        }
        
        this.fullPrice =  parseFloat(this.screenPrice) + this.servicePricesPercent + this.servicePricesNumber
        this.servicePercentPrice =  this.fullPrice - (this.fullPrice * (this.rollback/100))
        this.screenCounter = this.count.reduce((sum, current) => sum + current, 0)
    },
    showResult: function () {
        total.value = this.screenPrice
        totalCount.value = this.screenCounter
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCounter.value = this.fullPrice 
        totalControllBack.value = this.servicePercentPrice
    },
}
 
appData.init()
