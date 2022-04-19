import EditBioForm from "./EditBio.js";

const Bio = () => {
  return `
  <section class="bio">
    <div class="profile-photo">
        <img src="https://cdn-api.elice.io/api/archive/unzip_eb9e20954cff4d28ba2f0f810839d391/99c69bcfd9bfb52aec259488f72ffa7a8bf34b08310eb27d7c94492ab1cb24a9/ig_profile.png?se=2022-04-22T00%3A15%3A00Z&sp=rt&sv=2020-10-02&sr=b&sig=hWc45iMc7vREX2rcoqKfoPpI3C6m%2BBH7UOSydoR5ylA%3D" alt="profile-photo">
    </div>
    <div class="profile-info">
      <p class="name"></p>
      <p class="about"></p>
      <button class="edit-bio-button">Edit bio</button>
    </div>
    ${EditBioForm()}      
  </section>
  `
}

export default Bio;