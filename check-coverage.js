const fs = require("fs");
const coverageMap = require("istanbul-lib-coverage");

// Leitura do relatório de cobertura de testes
const coverageJson = fs.readFileSync("./coverage/coverage-final.json", "utf-8");
const map = coverageMap.createCoverageMap(JSON.parse(coverageJson));

// Cálculo da taxa de cobertura
const totalCoverage = map.getCoverageSummary().statements.pct;

// Verificação da taxa de cobertura
if (totalCoverage < 90) {
  console.error(`A cobertura de testes (${totalCoverage}%) é menor que 90%.`);
  process.exit(1);
} else {
  console.log(`A cobertura de testes é de ${totalCoverage}%.`);
}
