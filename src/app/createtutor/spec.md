# Save Tutor Use Case

## Input data
- Name
- RG
- CPF
- Phone number
- Whatsapp number
- Zip code
- City
- Area
- Number
- Complement

## Output data
- Tutor ID
- Name
- RG
- CPF
- Phone number
- Whatsapp number
- Zip code
- City
- Area
- Number
- Complement

## Business rules
- Name is required and should not be empty
- RG is required and should not be empty
- CPF is required and should be valid
- Phone number is not required
- Whatsapp number is not required
- Zip Code is only valid from São João da Boa Vista / SP
- City is required and should not be empty
- City should always be São João da Boa Vista / SP
- Area is not required
- Number is not required
- Complement is not required

## Scenarios

### Main Scenario
- Client send tutor input data to be saved
- System validate input according to business rules
- System save reservation
- System returns the output data

### Invalid input
- Client send tutor input data to be saved
- System validate input according to business rules
- System doesn't save tutor
- System return the invalid input error

### Fail on save tutor
- Client send tutor input data to be saved
- System validate input according to business rules
- System try to save tutor
- System fails to save the tutor
- System doesn't save tutor
- System return the error message to save tutor