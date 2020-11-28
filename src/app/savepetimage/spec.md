# Save image of Pet

## Primary actor
- Application Client

## Input data
- 1 Images
- Pet id

## Business Rule
- The system validates if the pet already exists
- The system validates the image file format by accepting the jpegformat
- The system validates the image size by accepting images up to 500 KB
- The system validates the amount of image saved in the repository, allowing up to 3 images
- The system must link the image to the pet ID
- The system must return an object indicating success when saving
- The system should save the image instantly, with a time limit of 3 seconds


## Scenarios

### Main Scenario
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the input data according to the business rule
- Step 3: The system links the image to the pet
- Step 4: The system saves the image in the repository
- Step 5: The system returns a message that the image has been saved

### Invalid image type
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the input data according to the business rule
- Step 3: The system identifies an invalid file type according to the business rule
- Step 4: The system does not save the image
- Step 5: The system returns the message with the error of invalid image type

### Size in KB of the invalid image
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the input data according to the business
- Step 3: System identifies an invalid image size as per business rule
- Step 4: The system does not save the image in the repository
- Step 5: The system returns the message with the error indicating image size is invalid

### Pet not found
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the input data according to the business rule
- Step 3: The system does not identify the pet id
- Step 4: The system does not save the image in the repository
- Step 5: The system does not save to the repository
- Step 6: The system returns a message with the error indicating that the pet id is not registered

### Image repository inaccessible
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the input data according to the business rule
- Step 3: The system links the image to the pet
- Step 4: The system does not save in the repository
- Step 5: The system returns a message with the error indicating that the service is currently unavailable and that should try later

### Slow image repository
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the input data according to the business rule
- Step 3: The system links the image to the pet
- Step 4: O si it takes more than 3 seconds to save to the repository
- Step 5: The system returns a message with an expired time error

### Number of images reached
- Step 1: The system receives the input data from the client application
- Step 2: The system validates the data entry according to the business rule
- Step 3: The system identifies that the image quantity has been reached
- Step 4: The system does not save the image
- Step 5: The system returns an error with the image quantity reached message
