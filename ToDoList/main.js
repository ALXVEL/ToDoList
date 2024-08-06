/* Get the list elements */
const project_list = document.getElementById("projects");
const addButton = document.getElementsByClassName("AddButton")[0];
const contents = document.getElementsByClassName('contents')[0];

addButton.addEventListener('click', createPopUp);

/* Pop up form */
function createPopUp(){
    // Create the dark overlay in the back
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    // Create the popup
    const popup = document.createElement('div');
    popup.id = 'popupForm';

    // close button
    const closeFormButton = document.createElement('button');
    closeFormButton.textContent = 'Close';
    closeFormButton.addEventListener('click', function(){
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    })

    // Form elements
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name:';
    projectNameLabel.htmlFor = 'pname';

    const projectNameInput = document.createElement('input');
    projectNameInput.id = 'pname';
    projectNameInput.type = 'text';

    const projectDescriptionLabel = document.createElement('label');
    projectDescriptionLabel.textContent = 'Description:';
    projectDescriptionLabel.htmlFor = 'pd';

    const projectDescriptionField = document.createElement('textarea');
    projectDescriptionField.id = 'pd';

    const projectPriorityLabel = document.createElement('label');
    projectPriorityLabel.textContent = 'Priority:';
    projectPriorityLabel.id = 'priority';

    const projectPriorityDropDown = document.createElement('select');
    projectPriorityDropDown.id = 'priority';
    
    const projectPriorityDropDownOptionOne = document.createElement('option');
    projectPriorityDropDownOptionOne.value = 'option-one';
    projectPriorityDropDownOptionOne.textContent = '1';

    const projectPriorityDropDownOptionTwo = document.createElement('option');
    projectPriorityDropDownOptionTwo.value = 'option-two';
    projectPriorityDropDownOptionTwo.textContent = '2';

    const projectPriorityDropDownOptionThree = document.createElement('option');
    projectPriorityDropDownOptionThree.value = 'option-three';
    projectPriorityDropDownOptionThree.textContent = '3';

    const projectPriorityDropDownOptionFour = document.createElement('option');
    projectPriorityDropDownOptionFour.value = 'option-four';
    projectPriorityDropDownOptionFour.textContent = '4';

    const projectPriorityDropDownOptionFive = document.createElement('option');
    projectPriorityDropDownOptionFive.value = 'option-five';
    projectPriorityDropDownOptionFive.textContent = '5';

    projectPriorityDropDown.appendChild(projectPriorityDropDownOptionOne);
    projectPriorityDropDown.appendChild(projectPriorityDropDownOptionTwo);
    projectPriorityDropDown.appendChild(projectPriorityDropDownOptionThree);
    projectPriorityDropDown.appendChild(projectPriorityDropDownOptionFour);
    projectPriorityDropDown.appendChild(projectPriorityDropDownOptionFive);

    // header
    const formTitle = document.createElement('h2')
    formTitle.textContent = 'Add Project';
    
    // POP UP APPENDING
    popup.appendChild(formTitle);
    popup.appendChild(closeFormButton);
    popup.appendChild(projectNameLabel);
    popup.appendChild(projectNameInput);
    popup.appendChild(projectDescriptionLabel);
    popup.appendChild(projectDescriptionField);
    popup.appendChild(projectPriorityLabel);
    popup.appendChild(projectPriorityDropDown);
    
    
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
}