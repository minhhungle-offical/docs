import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Tài liệu Web Dev thực chiến",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Tổng hợp kiến thức HTML, CSS, JavaScript, React... từ cơ bản đến nâng
        cao, có ví dụ và thực hành thực tế.
      </>
    ),
  },
  {
    title: "Tập trung vào tư duy lập trình",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Không chỉ học cú pháp – bạn sẽ hiểu cách tổ chức code, tư duy hướng đối
        tượng, hàm thuần (pure functions) và tối ưu hiệu suất.
      </>
    ),
  },
  {
    title: "Mở rộng & đóng góp",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Dự án mã nguồn mở, dễ dàng mở rộng thêm phần React, Node.js,
        TypeScript... và đón nhận sự đóng góp từ cộng đồng.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
