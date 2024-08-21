export default function Skills() {

    const SkillsBoxLeft = [
        { id: 1, skillName: "JavaScript", percent: 50 },
        { id: 2, skillName: "React", percent: 40 },
        { id: 3, skillName: "React Native", percent: 40 },
        { id: 4, skillName: "Bootstrap", percent: 70 }
    ]

    const SkillsBoxRight = [
        { id: 1, skillName: "Django", percent: "45" },
        { id: 2, skillName: "Asp.net Core", percent: "40" },
        { id: 3, skillName: "PHP", percent: "35" },
        { id: 4, skillName: "PostgreSql", percent: "55" }
    ]

    const SkillsMapLeft = SkillsBoxLeft.map(index => (
        <div className="py-1">
            <div className="d-flex text-small fw-bolder">
                <span className="me-auto">{index.skillName}</span><span>{index.percent}%</span>
            </div>
            <div className="progress my-1">
                <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                    data-aos-anchor=".skills-section"
                    style={{ width: '90%' }}
                    aria-valuenow= ""
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    ))

    const SkillsMapRight = SkillsBoxRight.map(index => (
        <div className="py-1">
            <div className="d-flex text-small fw-bolder">
                <span className="me-auto">{index.skillName}</span><span>{index.percent}%</span>
            </div>
            <div className="progress my-1">
                <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                    data-aos-anchor=".skills-section"
                    style={{ width: '90%' }}
                    aria-valuenow="{index.percent}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    ))

    return (
        <div className="section px-3 px-lg-4 pt-5">
            <div className="container-narrow">
                <div className="text-center mb-5">
                </div>
                <div className="text-center">
                    <p className="mx-auto mb-3 text-light" style={{ maxWidth: '600px' }}>
                        Öğrendiğim ve öğrenmeye devam ettiğim tüm teknolojileri aşağıdan inceleyebilirsiniz.
                    </p>
                </div>
                <div className="bg-light p-3">
                    <div className="row">
                        <div className="col-md-5">
                            {SkillsMapLeft}
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="py-1">
                                <div className="d-flex text-small fw-bolder">
                                    <span className="me-auto">PHP</span><span>70%</span>
                                </div>
                                <div className="progress my-1">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        data-aos="zoom-in-right"
                                        data-aos-delay="400"
                                        data-aos-anchor=".skills-section"
                                        style={{ width: '70%' }}
                                        aria-valuenow="70"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}