<template>
  <div class="container">
    <div class="bg-content">
      <!-- This SVGBlobs adds the attractive and responsive SVG circles in the background -->
      <SVGBlobs></SVGBlobs>
    </div>

    <div class="form-body">

      <h4>UIDesignDaily</h4>

      <h2><strong>Upload Files</strong></h2>

      <!-- When the form is submitted we are directing it to call a function submitForm() -->   
      <form @submit.prevent="submitForm" class="custom-form">

        <div class="form-row">

          <div class="item">
            <!-- AUTHORIZATION KEY INPUT --> 
            <label>Authorization Key:</label>
            <input v-model="authorizationKey" type="password" placeholder="Authorization Key" required/>
            <!-- If the authorization key is not valid then the page shows an error message --> 
            <p class="error"> {{keyError}} </p>
          </div>

          <div class="item">
            <!-- TAGS INPUT --> 
            <label>Tags (comma separated):</label>
            <input v-model="tags" type="text" placeholder="Tags (comma separated)" required/>

          </div>
          
        </div>
      
        <div class="form-row">

          <div class="item">
            <!-- TITLE INPUT --> 
            <label>Title:</label>
            <input v-model="title" type="text" placeholder="Title" required/>
          </div>
          
          <div class="item">
            <!-- DATE INPUT --> 
            <label>Date (DD/MM/YYYY):</label>
            <input v-model="date" type="text" placeholder="DD/MM/YYYY" required/>
            <!-- Validate the date format -->
            <p class="error"> {{dateError}} </p>
          </div>
        </div>
      
        <div class="form-row">

          <div class="item">
            <!-- DESCRIPTION BOX --> 
            <label>Description:</label>
            <textarea v-model="description" placeholder="Description" required></textarea>
          </div>
          
          <div class="item">

            <!-- DROPDOWN OPTION --> 
            <label>Software:</label>
              <select v-model="role" required>
                <option value="Sketch" selected>Sketch</option>
                <option value="NFT">NFT</option>
              </select>
            

            <div class="form-row" style="margin-top: 12px;">
    
              <div class="item">
                <!-- THUMBNAIL IMAGE UPLOAD --> 
                <label>Thumbnail Image:</label>
      
                <div class="file-upload-container">
                  <label for="thumbnailInput" class="custom-file-input-label">Upload File</label>
                  <input id="thumbnailInput" type="file" @change="handleThumbnailImageUpload" required/> 
                    
                  <div v-if="!thumbnailImage" class="noFile">No file uploaded</div>
                </div>
              </div>
    
              <div class="item">
                <!-- SOURCE FILE UPLOAD --> 
                <label>Source File:</label>
      
                <div class="file-upload-container">
                  <label for="sourceInput" class="custom-file-input-label">Upload File</label>
                  <input id="sourceInput" type="file" @change="handleSourceFileUpload" required/>
        
                  <div v-if="!sourceFile" class="noFile">No file uploaded</div>
                </div>
              </div>
  </div>

          </div>
      </div>
      <!-- Form Submission button --> 
      <button type="submit" @click="submitForm()"><strong>Submit</strong></button>
    </form>
    </div>
  </div>
</template>

<script>
import SVGBlobs from '@/components/SVGBlobs.vue';
import axios from 'axios';

export default {
  name: 'form',
  components: { SVGBlobs },
  data() {
    return {
      authorizationKey: '',
      title: '',
      description: '',
      tags: [],
      date: '',
      role: 'Sketch', 
      thumbnailImage: null,
      sourceFile: null,
      keyError: '',
      dateError: ''
    };
  },
  methods: {
    validateForm () {
      //validate password
      this.keyError = this.authorizationKey === '1234567890' ? '' : 'Incorrect authorization key'

      //validate date
      const datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

      if (!datePattern.test(this.date)) {
        this.dateError = 'Please enter a valid date in the format DD/MM/YYYY';
      } else {
        this.dateError = '';
      }
    },
    submitForm() {
      this.validateForm()
      //only if there is no violation of validation and all the required inputs are filled the submit button will direct to the
      // '/explorer' page
      if(!this.keyError && !this.dateError && this.title && this.date && this.role && this.thumbnailImage && this.sourceFile) {
        this.$router.push('/explorer')
      }

      // Prepare the data to be sent to the server
      const formData = {
        authorizationKey: this.authorizationKey,
        title: this.title,
        description: this.description,
        tags: this.tags,
        date: this.date,
        role: this.role,
        thumbnailImage: this.thumbnailImage,
        sourceFile: this.sourceFile,
      };

      // Make the Axios API call to log the user input
      axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        .then(response => {
          console.log('API response:', response.data);
          // Additional logic or redirection if needed
        })
        .catch(error => {
          console.error('API error:', error);
          // Handle error appropriately
        });
    },
    handleThumbnailImageUpload(event) {
      // Handling thumbnail image upload here
      this.thumbnailImage = event.target.files[0];
    },
    handleSourceFileUpload(event) {
      // Handling source file upload here
      this.sourceFile = event.target.files[0];
    }
  },
}
</script>


<style scoped>
body {
  background: #003049;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 0.8rem;
}

.form-body {
  background: #1d3557;
  border-radius: 15px;
  margin: 30px auto;
  opacity: 0.8;
  padding: 40px;
  position: relative;
  width: 80%;
  box-sizing: border-box;
  text-align: center;
}

.form-body h2,
.form-body h4 {
  color: white; 
  margin-bottom: 20px; 
}

.form-body h2 {
  margin-bottom: 40px;
  font-size: 1.5rem;
}

.custom-form {
  width: 100%; /* Adjusted width to fill the container */
  max-width: 600px; /* Added a max-width to prevent the form from becoming too wide */
  margin: 0 auto;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* Increased margin for better separation */
  flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
}

.form-row .item {
  width: 48%;
  box-sizing: border-box; /* Include padding in the width */
}

.noFile {
  margin-top: 15px;
  color: white;
}

.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40px; 
  border-radius: 5px;
  border: 2px solid #555;
  padding: 8px;
  box-sizing: border-box;
  color: rgba(85, 85, 85, 0.368); ;
  opacity: 0.7;
}

.file-upload-container input {
  display: none; 
  margin-right: 10px;
  margin-bottom: 10px;
}

.custom-file-input-label {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;;
  color: white;
}

.custom-file-input-label:hover {
  background-color: #1d3557;
}

label {
  color: #aaa;
  display: block;
  margin-bottom: 10px; /* Increased margin for better spacing */
  font-size: 0.8em; 
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: left;
}

input,
select {
  width: 100%;
  height: 40px; 
  border-radius: 5px;
  transition: border-color 0.3s ease;
  border: 2px solid #0000009e; 
  background-color: #1d3557;
  padding: 8px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
}

input:hover,
select:hover,
textarea:hover,
input:focus,
select:focus,
textarea:focus {
  border-color: #FF94B7;
  outline: none;
}

textarea {
  width: 100%; /* Make the textarea fill the available width */
  min-height: 118px; 
  border-radius: 5px;
  border: 2px solid #000; 
  background-color: #1d3557; 
  padding: 8px;
  box-sizing: border-box;
  color: white;
}

button {
  width: 50%;
  margin: 20px auto 0;
  padding: 10px;
  background: linear-gradient(to right, #f09ed3 , #FF94B7, #E86EB3);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  display: block; 
  margin-left: auto; /* Center the button horizontally */
  margin-right: auto; /* Center the button horizontally */
}

button:hover {
  background: linear-gradient(to right, #f76294 , #f54c8d, #ff0062);
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: bold;
}

@media (max-width: 768px) {
  body {
    overflow-y: auto;
  }

  .form-row .item {
    width: 100%; 
    padding: 12px;
  }

  .container {
    height: auto;
  }

  .form-body {
    padding: 20px;
  }
}
</style>

