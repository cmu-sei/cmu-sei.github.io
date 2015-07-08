$(document).ready(function() {

  var updated = []; // array containing list of most recently updated repos
  var allrepos = []; // array containing list of all repos

  (function ($, undefined) {

    var repoUrls = {};

    /**
     * Truncates string to a specified length.
     *
     * @param {String} string The string to truncate.
     * @param {Number} length The maximum number of characters to allow before truncating.
     * @return {string} The truncated string.
     */
    function truncateString(string, length) {
      length = length || 200;

      if (string.length > length) {
        return string.substring(0, length) + '...';
      }
      else {
        return string;
      }
    }

    /**
     * Sets the URL to the repository
     *
     * @param {array} repo The repo object.
     * @return {string} The URL to the repository.
     */
    function repoUrl(repo) {
      return repoUrls[repo.name] || repo.html_url;
    }

    /**
     * Sets the repository description
     *
     * @param {array} repo The repo object.
     * @return {string} The description of the repository, truncated as appropriate.
     */
    function repoDescription(repo) {
      desc = repo.description;
      if ( desc === '' ) {
        desc = "There is no description for this repository.";
      }
      return truncateString(desc);
    }

    /**
     * Sets the number of stars to display for the repository
     *
     * @param {array} repo The repo object.
     * @return {string} The number of stars to display for the repository.
     */
    function repoStars(repo) {
      stars = repo.stargazers_count;
      return stars;
    }

    /**
     * Sets the number of forks to display for the repository
     *
     * @param {Array} repo The repo object.
     * @return {string} The number of forks to display for the repository.
     */
    function repoForks(repo) {
      forks = repo.forks_count;
      return forks;
    }

    /**
     * Sets the account name for the repo to help provide context grouping based
     * on which account a repo is part of.
     *
     * @param {Array} repo The repo object.
     * @return {string} The account name of the repo.
     */
    function repoAccountName(repo) {
      return repo.full_name.substr(0, repo.full_name.indexOf('/'));
    }

    /**
     * Sets the URL to the repo owner's account.
     *
     * @param {Array} repo The repo object.
     * @return {string} The account URL of the repo owner.
     */
    function repoAccountUrl(repo) {
      account_url = repo.owner.html_url;
      return account_url;
    }


    /**
     * Adds the last 3 repositories updated to the 'Recent Repos' section. It does this by looping through the 'updated' variable
     * that contains the list of updated repositories in 'last updated' order. Then it creates the HTML structure on-the-fly and
     * populates it with the repository data.
     */
    function addUpdated() {

      $("#recent-repos").empty();

      for (r=0; r < Math.min(3, updated.length); r++) {
        repo = updated[r];
        account = repoAccountName(repo);
        account_url = repoAccountUrl(repo);
        desc = repoDescription(repo);
        forks = repoForks(repo);
        stars = repoStars(repo);

        var $list_item = $("<li>");
        $list_item.addClass("repo");

        var $item_wrapper = $("<div>");
        $item_wrapper.addClass("repo__wrapper");
        $list_item.append($item_wrapper);

        var $item_title = $("<h3>");
        $item_title.addClass("repo__title");
        var $link = $("<a>").attr("href", repoUrl(repo)).appendTo($item_title);
        $link.text(repo.name);
        $item_wrapper.append($item_title);

        var $item_account_title = $("<h5>");
        $item_account_title.addClass("repo__account-name");
        var $account_link = $("<a>").attr("href", account_url);
        $account_link.text(account);
        $item_account_title.append($account_link);
        $item_title.append($item_account_title);

        var $item_description = $("<p>");
        $item_wrapper.append($item_description);
        $item_description.addClass("repo__description");
        $item_description.text(desc);

        $item_meta_list = $("<ul>");
        $item_wrapper.append($item_meta_list);

        $item_meta_star = $("<li>");
        $item_meta_star.addClass("repo__meta-item");
        $item_meta_list.append($item_meta_star);

        $item_meta_fork = $("<li>");
        $item_meta_fork.addClass("repo__meta-item");
        $item_meta_list.append($item_meta_fork);

        $item_fork_icon = $("<i>");
        $item_fork_icon.addClass("fa fa-code-fork");
        $item_meta_fork.append($item_fork_icon);

        $item_star_icon = $("<i>");
        $item_star_icon.addClass("fa fa-star");
        $item_meta_star.append($item_star_icon);

        $item_meta_star.append($("<span>").text('\xA0' + stars));
        $item_meta_fork.append($("<span>").text('\xA0' + forks));

        $list_item.appendTo($('#recent-repos'));
      }

    }

    /**
     * Adds all epositories to the 'All Repos' section. It does this by looping through the 'allrepos' variable
     * that contains the list of all repositories. Then it creates the HTML structure on-the-fly and
     * populates it with the repository data.
     */
    function addAllRepos() {

      $("#all-repos").empty();

      for (r=0; r < allrepos.length; r++) {
        repo = allrepos[r];
        account = repoAccountName(repo);
        account_url = repoAccountUrl(repo);
        desc = repoDescription(repo);
        forks = repoForks(repo);
        stars = repoStars(repo);

        var $list_item = $("<li>");
        $list_item.addClass("repo");

        var $item_wrapper = $("<div>");
        $item_wrapper.addClass("repo__wrapper");
        $list_item.append($item_wrapper);

        var $item_title = $("<h3>");
        $item_title.addClass("repo__title");
        var $link = $("<a>").attr("href", repoUrl(repo)).appendTo($item_title);
        $link.text(repo.name);
        $item_wrapper.append($item_title);

        var $item_account_title = $("<h5>");
        $item_account_title.addClass("repo__account-name");
        var $account_link = $("<a>").attr("href", account_url);
        $account_link.text(account);
        $item_account_title.append($account_link);
        $item_title.append($item_account_title);

        var $item_description = $("<p>");
        $item_wrapper.append($item_description);
        $item_description.addClass("repo__description");
        $item_description.text(desc);

        $item_meta_list = $("<ul>");
        $item_wrapper.append($item_meta_list);

        $item_meta_star = $("<li>");
        $item_meta_star.addClass("repo__meta-item");
        $item_meta_list.append($item_meta_star);

        $item_meta_fork = $("<li>");
        $item_meta_fork.addClass("repo__meta-item");
        $item_meta_list.append($item_meta_fork);

        $item_fork_icon = $("<i>");
        $item_fork_icon.addClass("fa fa-code-fork");
        $item_meta_fork.append($item_fork_icon);

        $item_star_icon = $("<i>");
        $item_star_icon.addClass("fa fa-star");
        $item_meta_star.append($item_star_icon);

        $item_meta_star.append($("<span>").text('\xA0' + stars));
        $item_meta_fork.append($("<span>").text('\xA0' + forks));

        $list_item.appendTo($('#all-repos'));
      }

      $(".all-repos__title").text("All Repos (" + allrepos.length + ")");

    }

    /**
     * Adds a featured repository to the carousel.
     *
     * @param {array} repo A repository object.
     * @param {number} featured_count A number that specifies which carousel object to updated with the repository info.
     */
    function addFeaturedRepo(repo, featured_count) {
      repo = repo[0];
      name = truncateString(repo.name, 25);
      desc = repoDescription(repo);
      forks = repoForks(repo);
      stars = repoStars(repo);

      $('#hero-item-' + featured_count + ' .hero-item__title').append($("<a>").attr("href", repoUrl(repo)).text(name));
      $('#hero-item-' + featured_count + ' .hero-item__description').text(desc);
      $('#hero-item-' + featured_count + ' .hero-item__meta-item--star span').text('\xA0' + stars);
      $('#hero-item-' + featured_count + ' .hero-item__meta-item--fork span').text('\xA0' + forks);
    }

    /**
     * Adds repositories to an array of all repositories.
     *
     * @param {array} repos An array of repo objects.
     */
    function pushRepo(repos) {
      var left = repos;
      var right = allrepos;
      var result  = [],
      il = 0,
      ir = 0;

      while (il < left.length && ir < right.length){
        if (left[il].name.toLowerCase() < right[ir].name.toLowerCase()){
          result.push(left[il++]);
        }
        else {
          result.push(right[ir++]);
        }
      }

      allrepos = result.concat(left.slice(il)).concat(right.slice(ir));
    }

    /**
     * Adds repositories to an array of updated repositories.
     *
     * @param {array} repos An array of repo objects.
     */
    function mergeUpdated(repos) {
      var left = repos;
      var right = updated;
      var result  = [],
      il = 0,
      ir = 0;

      while (il < left.length && ir < right.length){
        if (left[il].pushed_at > right[ir].pushed_at){
          result.push(left[il++]);
        }
        else {
          result.push(right[ir++]);
        }
      }

      updated = result.concat(left.slice(il)).concat(right.slice(ir));
    }

    /**
     * Loops through the configuration file (js/orgs.js) and adds the repositories.
     *
     * @param {object} orgs An org object from the configuration file.
     * @param {object} repos A repo object.
     */
    function addRepos(orgs, repos, featured_count) {

      var org = orgs.name;
      repos = repos || [];
      reposcmd = orgs.type === "repo" ? "" : "/repos";

      // Supports three request types: repo, user, and org.
      var uri = "https://api.github.com/"+orgs.type+"s/"+org + reposcmd + "?per_page=1000&client_id=c4fce46f353ffdd7e307&client_secret=2c8f578c3ee982b341d17d5076d26ac95252cd87";

      $.getJSON(uri, function (result) {

        if (!Array.isArray(result)) {
          result = [].concat(result);
        }

        if (result && result.length > 0) {
          repos = repos.concat(result);

          $(function () {

            $.each(repos, function (i, repo) {
              repo.pushed_at = new Date(repo.pushed_at);
            });

            // Do some pre-sorting based on how recently the repo was modified.
            repos.sort(function (a, b) {
              if (a.pushed_at < b.pushed_at) {return 1;}
              if (b.pushed_at < a.pushed_at) {return -1;}
              return 0;
            });

            mergeUpdated(repos);

            repos.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
              if (b.name.toLowerCase() > a.name.toLowerCase()) {return -1;}
              return 0;
            });

            pushRepo(repos, org);
            addUpdated();
            addAllRepos();
            if ( orgs.featured ) {
              addFeaturedRepo(repos, featured_count);
            }
          });
        }
      });
    }

    var featured_count = 0; // Incremented for use in classnames when appending projects to featured carousel

    // Loop through each item in the list of orgs (orgs.js) and add the repos to all the right places. If it's a featured
    // repo, it increments a counter to make it work with the carousel.

    for (var r in orgs) {
      addRepos(orgs[r], null, featured_count);
      if ( orgs[r].featured ) {
        featured_count = featured_count +1;
      }
    }

  })($);

  // Miscellaneous
  $('#year').text(new Date().getFullYear()); // Update the year in the copyright just in case we forget to do it manually.

});
