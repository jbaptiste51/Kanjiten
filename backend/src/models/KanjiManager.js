const AbstractManager = require("./AbstractManager");

class KanjiManager extends AbstractManager {
  constructor() {
    super({ table: "kanji" });
  }

  insert(character, on, ontwo, kun, kuntwo, stroke, key, significate, jlpt) {
    return this.database.query(
      `INSERT INTO ${this.table} (character,
        on,
        ontwo,
        kun,
        kuntwo,
        stroke,
        key,
        significate,
        jlpt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [character, on, ontwo, kun, kuntwo, stroke, key, significate, jlpt]
    );
  }
}

module.exports = KanjiManager;
