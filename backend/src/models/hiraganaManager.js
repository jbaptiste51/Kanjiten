const AbstractManager = require("./AbstractManager");

class HiraganaManager extends AbstractManager {
  constructor() {
    super({ table: "hiragana" });
  }

  insert(character, read) {
    return this.database.query(
      `INSERT INTO ${this.table} (character,
read) VALUES (?, ?)`,
      [character, read]
    );
  }
}

module.exports = HiraganaManager;
