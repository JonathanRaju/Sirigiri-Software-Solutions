const Process = () => {
  return (
    <section className="pt-120 pb-120 tp-process bg-black sticky-wrapper">
      <div className="container">
        <div className="row vertical-column-gap">
          <div className="col-12 col-lg-6">
            <div className="process__content sticky-item">
              <h2 className="mt-8 title-anim text-white fw-7 mb-24">
                Artificial intelligence Process
              </h2>
              <p className="cur-lg text-quinary">
                Artificial intelligence (AI) involves the development of systems and algorithms that can perform tasks that typically require human intelligence.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="process__thumb sticky-item">
              <div className="process__single">
                <span className="op-text text-white mb-40 cur-lg">01</span>
                <h5 className="mt-8 text-white mb-24 title-anim">
                  Problem Identification
                </h5>
                <p className="cur-lg text-quinary">
                The first step is to identify a problem or task that can benefit from AI. This could range from natural language processing, image recognition, data analysis, or robotics, among others.
                </p>
              </div>
              <div className="process__single">
                <span className="op-text text-white mb-40 cur-lg">02</span>
                <h5 className="mt-8 text-white mb-24 title-anim">
                  Data Collection
                </h5>
                <p className="cur-lg text-quinary">
                  Data is a crucial component of AI. You need to gather and organize relevant data for the AI system to learn from. High-quality and diverse data are essential for training robust AI models.
                </p>
              </div>
              <div className="process__single">
                <span className="op-text text-white mb-40 cur-lg">03</span>
                <h5 className="mt-8 text-white mb-24 title-anim">Data Preprocessing</h5>
                <p className="cur-lg text-quinary">
                  Raw data often needs cleaning, transformation, and normalization to make it suitable for training. This step involves handling missing values, removing outliers, and preparing the data for model training.
                </p>
              </div>
              <div className="process__single">
                <span className="op-text text-white mb-40 cur-lg">04</span>
                <h5 className="mt-8 text-white mb-24 title-anim">
                  Feature Engineering
                </h5>
                <p className="cur-lg text-quinary">
                  Feature engineering involves selecting, creating, or transforming the relevant features (attributes) from the data that will be used as input for the AI model. Effective feature engineering can significantly impact the model&apos;s performance.
                </p>
              </div>
              <div className="process__single">
                <span className="op-text text-white mb-40 cur-lg">05</span>
                <h5 className="mt-8 text-white mb-24 title-anim">Model Selection</h5>
                <p className="cur-lg text-quinary">
                  Choose an appropriate machine learning or deep learning model architecture based on the problem you&apos;re trying to solve. Different tasks may require different types of models, such as decision trees, neural networks, or support vector machines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
