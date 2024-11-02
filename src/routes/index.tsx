import { Title } from "@solidjs/meta";
import { Card } from "../components/card";

function formatNum(num: Number) {
  return num.toLocaleString("en-US");
}

export default function Home() {
  return (
    <main>
      <Title>Holiday Dash</Title>
      <div class="stat-container">
        <Card title="Ford Visits" footer="+3.42%" center={true}>
          <div class="stat">{formatNum(1207456)}</div>
        </Card>
        <Card title="Chevy Visits" footer="-1.32%" center={true}>
          <div class="stat">{formatNum(1207456)}</div>
        </Card>
        <Card title="CDJR Visits" footer="+0.21%" center={true}>
          <div class="stat">{formatNum(1207456)}</div>
        </Card>
        <Card title="GMC Visits" footer="+3.42%" center={true}>
          <div class="stat">{formatNum(1207456)}</div>
        </Card>
        <Card title="Gordon Visits" footer="+3.42%" center={true}>
          <div class="stat">{formatNum(1207456)}</div>
        </Card>
      </div>
    </main>
  );
}
