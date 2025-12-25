
function calculateCalorie(obj)
{
    const age = obj.form.age.value;
    const gender = obj.form.gender.value;
    const bodyFat = obj.form.bodyFat.value;
    const height = obj.form.height.value;
    const weight = obj.form.weight.value;
    const activity = obj.form.activity.value;
    const unit = obj.form.unit.value;
    const formula = obj.form.formula.value;

    let BMR = '';
    if(formula == 0) // Mifflin
    {
        BMR = Mifflin(gender, age, bodyFat, height, weight);
    }
    else if(formula == 1) // Harris
    {
        BMR = Harris(gender, age, bodyFat, height, weight);
    }
    else if(formula == 2) // Katch
    {
        BMR = Katch(bodyFat, weight);
    }

    let ret = parseFloat(BMR)*parseFloat(activity);
    if(unit == 'kilojoules')
    {
        ret = (ret*4.1868);
    }

    document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3" style="color:#FFB775;">You should ROUGHLY consume <span class="text-white">'+Math.ceil(ret)+' '+unit+'/day </span> to maintain your weight. Anything <span class="text-white">above that</span> will <span class="text-white">increase</span> your weight and anything <span class="text-white">below that</span> will <span class="text-white">decrease</span> your weight</h4></div>';

}

function Mifflin(gender, age, bodyFat, height, weight)
{
    let BMR = (10*weight) + (6.25*height) - (5*age) + 5;
    if(gender == 1) // Female
    {
        BMR = (10*weight) + (6.25*height) - (5*age) - 161;
    }

    return BMR;
}

function Harris(gender, age, bodyFat, height, weight)
{
    let BMR = (13.397*weight) + (4.799*height) - (5.677*age) + 88.362;
    if(gender == 1) // Female
    {
        BMR = (9.247*weight) + (3.098*height) - (4.330*age) + 447.593;
    }

    return BMR;
}

function Katch(bodyFat, weight)
{
    let BMR = 370 + 21.6*(1 - (bodyFat/100))*weight;

    return BMR;
}

function toggleCard(card) {
    var expandText = $(card).find('.expand-text');
    var workoutList = $(card).find('.card-text');

    if (workoutList.is(':visible')) {
        workoutList.slideUp();
        expandText.text('Click to expand');
    } else {
        workoutList.slideDown();
        expandText.text('Click to collapse');
    }
}



function calculateCalorie2(obj) {
    const age = obj.form.age2.value;
    const gender = obj.form.gender2.value;
    const bodyFat = obj.form.bodyFat2.value;
    const height_feet = obj.form.height_feet2.value;
    const height_inches = obj.form.height_inches2.value;
    const weight = obj.form.weight2.value;
    const activity = obj.form.activity.value;
    const unit = obj.form.unit.value;
    const formula = obj.form.formula.value;

    // Convert height from feet and inches to inches
    const height = (height_feet * 12) + parseInt(height_inches);
    const height_cm = height * 2.54

    const weight_kg = weight * 0.45359237;

    let BMR = '';
    if (formula == 0) // Mifflin
    {
        BMR = Mifflin(gender, age, bodyFat, height_cm, weight_kg);
    } else if (formula == 1) // Harris
    {
        BMR = Harris(gender, age, bodyFat, height_cm, weight_kg);
    } else if (formula == 2) // Katch
    {
        BMR = Katch(bodyFat, weight_kg);
    }

    let ret = parseFloat(BMR) * parseFloat(activity);
    if (unit == 'kilojoules') {
        ret = (ret * 4.1868);
    }

    document.querySelector(".ans2_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3" style="color:#f1fb97;">You should ROUGHLY consume <span class="text-white">' + Math.ceil(ret) + ' ' + unit + '/day </span> to maintain your weight. Anything <span class="text-white">above that </span> will <span class="text-white">increase</span> your weight and anything <span class="text-white">below that</span> will <span class="text-white">decrease</span> your weight</h4></div>';
}

function Mifflin(gender, age, bodyFat, height, weight)
{
    let BMR = (10*weight) + (6.25*height) - (5*age) + 5;
    if(gender == 1) // Female
    {
        BMR = (10*weight) + (6.25*height) - (5*age) - 161;
    }

    return BMR;
}

function Harris(gender, age, bodyFat, height, weight)
{
    let BMR = (13.397*weight) + (4.799*height) - (5.677*age) + 88.362;
    if(gender == 1) // Female
    {
        BMR = (9.247*weight) + (3.098*height) - (4.330*age) + 447.593;
    }

    return BMR;
}

function Katch(bodyFat, weight)
{
    let BMR = 370 + 21.6*(1 - (bodyFat/100))*weight;

    return BMR;
}
