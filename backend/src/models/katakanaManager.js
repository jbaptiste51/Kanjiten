const AbstractManager = require("./AbstractManager");

class KatakanaManager extends AbstractManager {
  constructor() {
    super({ table: "katakana" });
  }

  insert(character, read) {
    return this.database.query(
      `INSERT INTO ${this.table} (character,
read) VALUES (?, ?)`,
      [character, read]
    );
  }
}

module.exports = KatakanaManager;
