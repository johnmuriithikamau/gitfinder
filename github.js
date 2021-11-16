class Github {
  constructor() {
    this.client_id = '51f2fefe407deaa713fb';
    this.client_secret = '3b79ddc7a8ed7fdb697774bf544f4f50abf2522e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repo = await reposResponse.json();

    return {
      profile,
      repo
    }
  }
}