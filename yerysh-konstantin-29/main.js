function redirectToOtherSite() {
    let link = document.getElementById("linkInput").value;

    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      link = "https://" + link;
    }

    window.location.href = link;
}


let button = document.getElementById('button');
button.addEventListener('click', function() {
    redirectToOtherSite()
});
  