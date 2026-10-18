// About page folders: each folder previews the first three photos from its
// gallery and opens the full gallery in a dialog. To add photos, add <img>
// tags to a folder's dialog; the preview and photo count update themselves.
(function () {
  document.querySelectorAll('.folder[data-gallery]').forEach(function (folder) {
    var dialog = document.getElementById(folder.dataset.gallery);
    if (!dialog) return;
    var photos = dialog.querySelectorAll('.about-photo');
    var papers = folder.querySelector('.folder-papers');

    Array.prototype.slice.call(photos, 0, 3).forEach(function (photo) {
      var paper = document.createElement('img');
      paper.src = photo.getAttribute('src');
      paper.alt = '';
      paper.className = 'folder-paper';
      paper.decoding = 'async';
      papers.appendChild(paper);
    });

    var count = folder.querySelector('.folder-count');
    if (count) count.textContent = photos.length + (photos.length === 1 ? ' photo' : ' photos');

    folder.addEventListener('click', function () { dialog.showModal(); });
    dialog.querySelector('.gallery-close').addEventListener('click', function () { dialog.close(); });

    // Clicking the dimmed backdrop (outside the panel) closes the gallery.
    dialog.addEventListener('click', function (e) {
      var r = dialog.getBoundingClientRect();
      var outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      if (outside) dialog.close();
    });
  });
})();
