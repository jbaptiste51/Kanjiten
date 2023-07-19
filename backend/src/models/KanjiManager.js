const AbstractManager = require("./AbstractManager");

class KanjiManager extends AbstractManager {
  constructor() {
    super({ table: "kanji" });
  }

  insert(character, on, ontwo, kun, kuntwo, stroke, key, significate) {
    return this.database.query(
      `INSERT INTO ${this.table} (character,
        on,
        ontwo,
        kun,
        kuntwo,
        stroke,
        key,
        significate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [character, on, ontwo, kun, kuntwo, stroke, key, significate]
    );
  }
}

module.exports = KanjiManager;
