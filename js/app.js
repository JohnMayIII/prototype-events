class Picnic{
    constructor(){
        this.picnic = {
            image: '',
            timeOfDay: '',
            blanketPlace: '',
            mainFood: '',
            drink: '',
            desert: ''
        }
    }

    button(){
        let button = document.getElementById('submitBtn')
        button.addEventListener('click', this.displayData)
    }

    displayData(e){
        e.preventDefault();
        let inputImage = document.getElementById('image').value
        let inputTimeOfDay = document.getElementById('timeOfDay').value
        let inputBlanketPlace = document.getElementById('blanketPlace').value
        let inputMainFood = document.getElementById('mainDish').value
        let inputDrink = document.getElementById('drink').value
        let inputDesert = document.getElementById('desert').value

        this.picnic = {
            image: inputImage,
            timeOfDay: inputTimeOfDay,
            blanketPlace: inputBlanketPlace,
            mainFood: inputMainFood,
            drink: inputDrink,
            desert: inputDesert
        }

        let picnicDisplay = document.getElementById('picnicDisplay');
        picnicDisplay.innerHTML +=
        `
        <div class="col-md-4">
                        <div class="card">
                            <img src="${this.picnic.image}"alt="placeholder" class="img-fluid picnic-img" />
                            <div class="card-body">
                                <p class="card-text text-dark">Time of Day: <span id="picnicTime">${this.picnic.timeOfDay}</span></p>
                                <p class="card-text text-dark">Blanket Placement: <span id="blanketPlace">${this.picnic.blanketPlace}</span></p>
                            </div>
                            <div class="card-footer">
                                <p class="card-text text-dark">Main Dish: <span id="mainDish">${this.picnic.mainFood}</span></p>
                                <p class="card-text text-dark">Drink: <span id="drink">${this.picnic.drink}</span></p>
                                <p class="card-text text-dark">Desert: <span id="desert">${this.picnic.desert}</span></p>
                            </div>
                        </div>
                    </div>
        `

        console.log(this.picnic)
    }
}

let action = new Picnic();
action.button();