var documenterSearchIndex = {"docs":
[{"location":"struct/#Structures-1","page":"Structures","title":"Structures","text":"","category":"section"},{"location":"struct/#RBE-1","page":"Structures","title":"RBE","text":"","category":"section"},{"location":"struct/#","page":"Structures","title":"Structures","text":"struct RBE\r\n    model::ModelFrame               #Model frame\r\n    rmodel::ModelFrame              #Random effect model\r\n    design::Design\r\n    factors::Array{Symbol, 1}       #Factor list\r\n    θ0::Array{Float64, 1}           #Initial variance paramethers\r\n    θ::Array{Float64, 1}            #Final variance paramethers\r\n    reml::Float64                   #-2REML\r\n    fixed::EffectTable\r\n    typeiii::ContrastTable\r\n    R::Array{Matrix{Float64},1}     #R matrices for each subject\r\n    V::Array{Matrix{Float64},1}     #V matrices for each subject\r\n    G::Matrix{Float64}              #G matrix\r\n    C::Matrix{Float64}              #C var(β) p×p variance-covariance matrix\r\n    A::Matrix{Float64}              #asymptotic variance-covariance matrix ofb θ\r\n    H::Matrix{Float64}              #Hessian matrix\r\n    X::Matrix                       #Matrix for fixed effects\r\n    Z::Matrix                       #Matrix for random effects\r\n    Xv::Array{Matrix{Float64},1}    #X matrices for each subject\r\n    Zv::Array{Matrix{Float64},1}    #Z matrices for each subject\r\n    yv::Array{Array{Float64, 1},1}  #responce vectors for each subject\r\n    detH::Float64                   #Hessian determinant\r\n    preoptim::Optim.MultivariateOptimizationResults        #Pre-optimization result object\r\n    optim::Optim.MultivariateOptimizationResults           #Optimization result object\r\nend","category":"page"},{"location":"struct/#Design-1","page":"Structures","title":"Design","text":"","category":"section"},{"location":"struct/#","page":"Structures","title":"Structures","text":"struct Design\r\n    obs::Int\r\n    subj::Int\r\n    sqn::Int\r\n    pn::Int\r\n    fn::Int\r\n    sbf::Vector{Int}\r\n    rankx::Int\r\n    rankxz::Int\r\n    df2::Int\r\n    df3::Int\r\n    df4::Int\r\nend","category":"page"},{"location":"struct/#EffectTable-1","page":"Structures","title":"EffectTable","text":"","category":"section"},{"location":"struct/#","page":"Structures","title":"Structures","text":"struct EffectTable <: RBETable\r\n    name::Vector\r\n    est::Vector\r\n    se::Vector\r\n    f::Vector\r\n    df::Vector\r\n    t::Vector\r\n    p::Vector\r\nend","category":"page"},{"location":"struct/#ContrastTable-1","page":"Structures","title":"ContrastTable","text":"","category":"section"},{"location":"struct/#","page":"Structures","title":"Structures","text":"struct ContrastTable <: RBETable\r\n    name::Vector\r\n    f::Vector\r\n    df::Vector\r\n    p::Vector\r\nend","category":"page"},{"location":"struct/#EstimateTable-1","page":"Structures","title":"EstimateTable","text":"","category":"section"},{"location":"struct/#","page":"Structures","title":"Structures","text":"struct EstimateTable <: RBETable\r\n    name::Vector\r\n    f::Vector\r\n    df::Vector\r\n    p::Vector\r\nend","category":"page"},{"location":"api/#API-1","page":"Api","title":"API","text":"","category":"section"},{"location":"api/#ReplicateBE.RBE-1","page":"Api","title":"ReplicateBE.RBE","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.RBE","category":"page"},{"location":"api/#Main.ReplicateBE.RBE","page":"Api","title":"Main.ReplicateBE.RBE","text":"struct RBE\n    model::ModelFrame               #Model frame\n    rmodel::ModelFrame              #Random effect model\n    design::Design                  #Design description\n    factors::Array{Symbol, 1}       #Factor list\n    θ0::Array{Float64, 1}           #Initial variance paramethers\n    θ::Tuple{Vararg{Float64}}       #Final variance paramethers\n    reml::Float64                   #-2REML\n    fixed::EffectTable              #Fixed Effect table\n    typeiii::ContrastTable          #Type III table\n    R::Array{Matrix{Float64},1}     #R matrices for each subject\n    V::Array{Matrix{Float64},1}     #V matrices for each subject\n    G::Matrix{Float64}              #G matrix\n    C::Matrix{Float64}              #C var(β) p×p variance-covariance matrix\n    A::Matrix{Float64}              #asymptotic variance-covariance matrix of b θ\n    H::Matrix{Float64}              #Hessian matrix\n    X::Matrix                       #Matrix for fixed effects\n    Z::Matrix                       #Matrix for random effects\n    Xv::Array{Matrix{Float64},1}    #X matrices for each subject\n    Zv::Array{Matrix{Float64},1}    #Z matrices for each subject\n    yv::Array{Array{Float64, 1},1}  #responce vectors for each subject\n    detH::Float64                   #Hessian determinant\n    preoptim::Union{Optim.MultivariateOptimizationResults, Nothing}         #Pre-optimization result object\n    optim::Optim.MultivariateOptimizationResults                            #Optimization result object\nend\n\nReplicate bioequivalence structure.\n\n\n\n\n\n","category":"type"},{"location":"api/#ReplicateBE.rbe-1","page":"Api","title":"ReplicateBE.rbe","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.rbe","category":"page"},{"location":"api/#Main.ReplicateBE.rbe","page":"Api","title":"Main.ReplicateBE.rbe","text":"rbe(df; dvar::Symbol,\n    subject::Symbol,\n    formulation::Symbol,\n    period::Symbol,\n    sequence::Symbol,\n    g_tol::Float64 = 1e-8, x_tol::Float64 = 0.0, f_tol::Float64 = 0.0, iterations::Int = 100,\n    store_trace = false, extended_trace = false, show_trace = false,\n    memopt = true)\n\nMixed model fitting function for replicate bioequivalence without data preparation (apply categorical! for each factor and sort! to dataframe).\n\nMixed model in matrix form:\n\n<p align=\"center\"> y = Xbeta+Zu+epsilon </p>\n\nwith covariance matrix for each subject:\n\nV_i = Z_iGZ_i+R_i\n\n\n\n\n\n","category":"function"},{"location":"api/#StatsBase.coef-1","page":"Api","title":"StatsBase.coef","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"coef","category":"page"},{"location":"api/#StatsBase.coef","page":"Api","title":"StatsBase.coef","text":"coef(obj::StatisticalModel)\n\nReturn the coefficients of the model.\n\n\n\n\n\ncoef(rbe::RBE)\n\nReturn model coefficients.\n\nbeta = (sum_i=1^n X_iV_i^-1X_i)^-1(sum_i=1^n X_iV_i^-1y_i)\n\n\n\n\n\ncoef(rbe::RBE)\n\nReturn model coefficients.\n\nbeta = (sum_i=1^n X_iV_i^-1X_i)^-1(sum_i=1^n X_iV_i^-1y_i)\n\n\n\n\n\ncoef(rbe::RBE)\n\nReturn model coefficients.\n\nbeta = (sum_i=1^n X_iV_i^-1X_i)^-1(sum_i=1^n X_iV_i^-1y_i)\n\n\n\n\n\ncoef(rbe::RBE)\n\nReturn model coefficients.\n\nbeta = (sum_i=1^n X_iV_i^-1X_i)^-1(sum_i=1^n X_iV_i^-1y_i)\n\n\n\n\n\ncoef(rbe::RBE)\n\nReturn model coefficients.\n\nbeta = (sum_i=1^n X_iV_i^-1X_i)^-1(sum_i=1^n X_iV_i^-1y_i)\n\n\n\n\n\n","category":"function"},{"location":"api/#StatsBase.confint-1","page":"Api","title":"StatsBase.confint","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"confint","category":"page"},{"location":"api/#StatsBase.confint","page":"Api","title":"StatsBase.confint","text":"confint(obj::StatisticalModel; level::Real=0.95)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\n\n\n\n\nconfint(obj::RBE; level::Real=0.95, expci::Bool = false, inv::Bool = false, df = :sat)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\nexpci = true: return exponented CI.\n\ninv = true: return -estimate ± t*se\n\ndf = :sat: use Satterthwaite DF approximation.\n\ndf = :df3 or df = :cont: DF (contain) = N - rank(ZX).\n\n\n\n\n\nconfint(obj::RBE; level::Real=0.95, expci::Bool = false, inv::Bool = false, df = :sat)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\nexpci = true: return exponented CI.\n\ninv = true: return -estimate ± t*se\n\ndf = :sat: use Satterthwaite DF approximation.\n\ndf = :df3 or df = :cont: DF (contain) = N - rank(ZX).\n\n\n\n\n\nconfint(obj::RBE; level::Real=0.95, expci::Bool = false, inv::Bool = false, df = :sat)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\nexpci = true: return exponented CI.\n\ninv = true: return -estimate ± t*se\n\ndf = :sat: use Satterthwaite DF approximation.\n\ndf = :df3 or df = :cont: DF (contain) = N - rank(ZX).\n\n\n\n\n\nconfint(obj::RBE; level::Real=0.95, expci::Bool = false, inv::Bool = false, df = :sat)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\nexpci = true: return exponented CI.\n\ninv = true: return -estimate ± t*se\n\ndf = :sat: use Satterthwaite DF approximation.\n\ndf = :df3 or df = :cont: DF (contain) = N - rank(ZX).\n\n\n\n\n\nconfint(obj::RBE; level::Real=0.95, expci::Bool = false, inv::Bool = false, df = :sat)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\nexpci = true: return exponented CI.\n\ninv = true: return -estimate ± t*se\n\ndf = :sat: use Satterthwaite DF approximation.\n\ndf = :df3 or df = :cont: DF (contain) = N - rank(ZX).\n\n\n\n\n\n","category":"function"},{"location":"api/#StatsBase.dof-1","page":"Api","title":"StatsBase.dof","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"dof","category":"page"},{"location":"api/#StatsBase.dof","page":"Api","title":"StatsBase.dof","text":"dof(obj::StatisticalModel)\n\nReturn the number of degrees of freedom consumed in the model, including when applicable the intercept and the distribution's dispersion parameter.\n\n\n\n\n\ndof(d::UnivariateDistribution)\n\nGet the degrees of freedom.\n\n\n\n\n\ndof(rbe::RBE)\n\nReturn the number of degrees of freedom for the coefficients of the model.\n\n\n\n\n\ndof(rbe::RBE)\n\nReturn the number of degrees of freedom for the coefficients of the model.\n\n\n\n\n\ndof(rbe::RBE)\n\nReturn the number of degrees of freedom for the coefficients of the model.\n\n\n\n\n\ndof(rbe::RBE)\n\nReturn the number of degrees of freedom for the coefficients of the model.\n\n\n\n\n\ndof(rbe::RBE)\n\nReturn the number of degrees of freedom for the coefficients of the model.\n\n\n\n\n\n","category":"function"},{"location":"api/#StatsBase.stderror-1","page":"Api","title":"StatsBase.stderror","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"stderror","category":"page"},{"location":"api/#StatsBase.stderror","page":"Api","title":"StatsBase.stderror","text":"stderror(obj::StatisticalModel)\n\nReturn the standard errors for the coefficients of the model.\n\n\n\n\n\nStatsBase.stderror(rbe::RBE)\n\nReturn the standard errors for the coefficients of the model.\n\nse = sqrtLCL\n\n\n\n\n\nStatsBase.stderror(rbe::RBE)\n\nReturn the standard errors for the coefficients of the model.\n\nse = sqrtLCL\n\n\n\n\n\nStatsBase.stderror(rbe::RBE)\n\nReturn the standard errors for the coefficients of the model.\n\nse = sqrtLCL\n\n\n\n\n\nStatsBase.stderror(rbe::RBE)\n\nReturn the standard errors for the coefficients of the model.\n\nse = sqrtLCL\n\n\n\n\n\nStatsBase.stderror(rbe::RBE)\n\nReturn the standard errors for the coefficients of the model.\n\nse = sqrtLCL\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.coefnum-1","page":"Api","title":"ReplicateBE.coefnum","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.coefnum","category":"page"},{"location":"api/#Main.ReplicateBE.coefnum","page":"Api","title":"Main.ReplicateBE.coefnum","text":"coefnum(rbe::RBE)\n\nReturn number of coefficients (length β).\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.contrast-1","page":"Api","title":"ReplicateBE.contrast","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.contrast","category":"page"},{"location":"api/#Main.ReplicateBE.contrast","page":"Api","title":"Main.ReplicateBE.contrast","text":"contrast(rbe::RBE, L::Matrix; numdf = 1, name = \"Contrast\", memopt = true)::ContrastTable\n\nReturn contrast table for L matrix.\n\nF = fracbetaL(LCL)^-1Lbetarank(LCL)\n\nDF for one-dimetion case:\n\ndf = frac2(LCL)^2gAg\n\nwhere A = 2H\n\nwhere g = triangledown _theta(LC^-1L)\n\nDF for multi-dimention case:\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.design-1","page":"Api","title":"ReplicateBE.design","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.design","category":"page"},{"location":"api/#Main.ReplicateBE.design","page":"Api","title":"Main.ReplicateBE.design","text":"design(rbe::RBE)::Design\n\nReturn design information object, where:\n\n```\nstruct Design\n    obs::Int          # Number of observations\n    subj::Int         # Number of statistica independent subjects\n    sqn::Int          # Number of sequences\n    pn::Int           # Number of periods\n    fn::Int           # Number of formulations\n    sbf::Vector{Int}  # Subjects in each formulation level\n    rankx::Int        # Rank of fixed effect matrix\n    rankxz::Int       # Rank of XZ (fixed+random) effect matrix\n    df2::Int          # subj - sqn         (Robust DF)\n    df3::Int          # obs  - rankxz      (Contain DF for sequence and period)\n    df4::Int          # obs  - rankxz + p\nend```\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.estimate-1","page":"Api","title":"ReplicateBE.estimate","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.estimate","category":"page"},{"location":"api/#Main.ReplicateBE.estimate","page":"Api","title":"Main.ReplicateBE.estimate","text":"estimate(rbe::RBE, L::Matrix; df = :sat, name = \"Estimate\", memopt = true, alpha = 0.05)\n\nReturn estimate table for L 1xp matrix.\n\nestimate = Lbeta\n\nse = sqrtLCL\n\nt = estimatese\n\nFor df = :sat:\n\ndf = frac2(LCL)^2gAg\n\nwhere A = 2H\n\nwhere g = triangledown _theta(LC^-1L)\n\nFor df = :cont (contain):\n\ndf = N - rank(ZX)\n\nCI estimate is CI = stimate  t(alpha df)*se\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.fixed-1","page":"Api","title":"ReplicateBE.fixed","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.fixed","category":"page"},{"location":"api/#Main.ReplicateBE.fixed","page":"Api","title":"Main.ReplicateBE.fixed","text":"fixed(rbe::RBE)\n\nReturn fixed effect table (β).\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.randrbeds-1","page":"Api","title":"ReplicateBE.randrbeds","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.randrbeds","category":"page"},{"location":"api/#Main.ReplicateBE.randrbeds","page":"Api","title":"Main.ReplicateBE.randrbeds","text":"randrbeds(;n=24, sequence=[1,1],\n    design = [\"T\" \"R\" \"T\" \"R\"; \"R\" \"T\" \"R\" \"T\"],\n    inter=[0.5, 0.4, 0.9], intra=[0.1, 0.2],\n    intercept = 0, seqcoef = [0.0, 0.0], periodcoef = [0.0, 0.0, 0.0, 0.0], formcoef = [0.0, 0.0],\n    dropsubj = 0.0, dropobs::Int = 0, seed::Int = 0)\n\nRandom dataset for bioequivalence.\n\n\n\n\n\nrandrbeds(n::Int, sequence::Vector,\n    design::Matrix,\n    θinter::Vector, θintra::Vector,\n    intercept::Real, seqcoef::Vector, periodcoef::Vector, formcoef::Vector,\n    dropsubj::Float64, dropobs::Int, seed::Int)\n\nRandom dataset for bioequivalence.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.reml2-1","page":"Api","title":"ReplicateBE.reml2","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.reml2","category":"page"},{"location":"api/#Main.ReplicateBE.reml2","page":"Api","title":"Main.ReplicateBE.reml2","text":"reml2(rbe::RBE, θ::Array{Float64, 1})\n\nReturm -2REML for rbe model\n\n\n\n\n\nreml2(rbe::RBE)\n\nReturm -2logREML for rbe model\n\nlogREML(thetabeta) = -fracN-p2 - frac12sum_i=1^nlogV_i-\n\n-frac12logsum_i=1^nX_iV_i^-1X_i-frac12sum_i=1^n(y_i - X_ibeta)V_i^-1(y_i - X_ibeta)\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.typeiii-1","page":"Api","title":"ReplicateBE.typeiii","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.typeiii","category":"page"},{"location":"api/#Main.ReplicateBE.typeiii","page":"Api","title":"Main.ReplicateBE.typeiii","text":"typeiii(rbe::RBE)\n\nReturn TYPE III table.\n\nsee contrast\n\n\n\n\n\n","category":"function"},{"location":"details/#Details-1","page":"Details","title":"Details","text":"","category":"section"},{"location":"testval/#Validation-1","page":"Validation","title":"Validation","text":"","category":"section"},{"location":"testval/#","page":"Validation","title":"Validation","text":"Validation program include public datasets and generated datasets. All public datasets include in test/testdata.jl.","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"Generated datasets made with randrbeds function with fixed seed (could be reproduced at any time) and include following disignes:","category":"page"},{"location":"testval/#subjects,-balanced-1","page":"Validation","title":"24 subjects, balanced","text":"","category":"section"},{"location":"testval/#","page":"Validation","title":"Validation","text":"1  TRTR/RTRT\n2  TRRT/RTTR\n3  TTRR/RRTT\n4  TRTR/RTRT/TRRT/RTTR\n5  TRRT/RTTR/TTRR/RRTT\n6  TRTR/RTRT/TTRR/RRTT\n7  TRT/RTR\n8  TRR/RTT\n9  TR/RT/TT/RR\n10 TRR/RTR/RRT\n11 TRR/RTR*","category":"page"},{"location":"testval/#subjects,-unbalanced,-20-dropped-observations-1","page":"Validation","title":"48 subjects, unbalanced, 20 dropped observations","text":"","category":"section"},{"location":"testval/#","page":"Validation","title":"Validation","text":"12  TRTR/RTRT\n13  TRRT/RTTR\n14  TTRR/RRTT\n15  TRTR/RTRT/TRRT/RTTR\n16  TRRT/RTTR/TTRR/RRTT\n17  TRTR/RTRT/TTRR/RRTT\n18  TRT/RTR\n19  TRR/RTT\n20  TR/RT/TT/RR\n21 TRR/RTR/RRT\n22 TRR/RTR","category":"page"},{"location":"testval/#Special-cases-1","page":"Validation","title":"Special cases","text":"","category":"section"},{"location":"testval/#","page":"Validation","title":"Validation","text":"* 101 SP1: TRTR/RTRT 1024 subjects, 2000 dropped observations\r\n* 102 SP2: TRT/RTR 4096 subjects, 2000 dropped observations (total 10288 observations)","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"SP1 output:","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"rds = ReplicateBE.randrbeds(;n=1024, sequence=[1,2], design = [\"T\" \"R\" \"T\" \"R\"; \"R\" \"T\" \"R\" \"T\"], inter=[0.5, 0.4, 0.9], intra=[0.1, 0.2], intercept = 1.0, seqcoef = [0.0, 0.0], periodcoef = [0.0, 0.0, 0.0, 0.0], formcoef = [0.0, 0.1], dropobs = 2000, seed = 10101)\r\n@time be = ReplicateBE.rbe(rds, dvar = :var, subject = :subject, formulation = :formulation, period = :period, sequence = :sequence)\r\n  6.107196 seconds (14.51 M allocations: 981.933 MiB, 8.28% gc time)\r\nBioequivalence Linear Mixed Effect Model (status: converged)\r\n\r\n-2REML: 4032.92    REML: -2016.46\r\n\r\nFixed effect:\r\n─────────────────────────────────────────────────────────────────────────────────────────────\r\nEffect           Value         SE          F           DF        t           P|t|\r\n─────────────────────────────────────────────────────────────────────────────────────────────\r\n(Intercept)      1.17091       0.0342916   1165.94     1215.96   34.1458     9.58974e-180*\r\nsequence: TRTR   -0.0230415    0.0497151   0.214805    976.825   -0.463471   0.64313\r\nperiod: 2        -0.0118358    0.0300503   0.15513     1397.78   -0.393865   0.69374\r\nperiod: 3        -0.00522645   0.0288399   0.0328418   1139.11   -0.181223   0.856225\r\nperiod: 4        -0.0271755    0.0300382   0.81848     1398.08   -0.904699   0.365781\r\nformulation: T   -0.102651     0.0231198   19.7131     1445.78   -4.43995    9.68179e-6*\r\n─────────────────────────────────────────────────────────────────────────────────────────────\r\nIntra-individual variation:\r\nformulation: R   0.202459\r\nformulation: T   0.105328\r\n\r\nInter-individual variation:\r\nformulation: R   0.396337\r\nformulation: T   0.52727\r\nρ:               0.933991   Cov: 0.426964\r\n\r\nConfidence intervals(90%):\r\nformulation: R / formulation: T\r\n86.8747 - 93.7445 (%)\r\nformulation: T / formulation: R\r\n106.673 - 115.1083 (%)","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"SP1 output:    ","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"rds = ReplicateBE.randrbeds(;n=4096, sequence=[1,4], design = [\"T\" \"R\" \"T\"; \"R\" \"T\" \"R\"], inter=[0.5, 0.4, 0.9], intra=[0.1, 0.9], intercept = 1.0, seqcoef = [10.0, 0.0], periodcoef = [0.0, 0.0, 0.0], formcoef = [0.0, 1.0], dropobs = 2000, seed = 10102)\r\nbe = ReplicateBE.rbe(rds, dvar = :var, subject = :subject, formulation = :formulation, period = :period, sequence = :sequence)\r\n312.655087 seconds (269.38 M allocations: 14.273 GiB, 1.47% gc time)\r\nBioequivalence Linear Mixed Effect Model (status: converged)\r\n\r\n-2REML: 26633.2    REML: -13316.6\r\n\r\nFixed effect:\r\n───────────────────────────────────────────────────────────────────────────────────────\r\nEffect           Value         SE          F          DF        t           P|t|\r\n───────────────────────────────────────────────────────────────────────────────────────\r\n(Intercept)      1.99206       0.0184652   11638.4    4779.03   107.882     0.0*\r\nsequence: TRT    10.0134       0.0322104   96643.1    5028.62   310.875     0.0*\r\nperiod: 2        0.0193164     0.0223827   0.744777   6811.0    0.863005    0.388165\r\nperiod: 3        -0.00501682   0.0152331   0.108463   1577.27   -0.329338   0.741944\r\nformulation: T   -0.995365     0.0210042   2245.71    6298.6    -47.3889    0.0*\r\nIntra-individual variation:\r\nformulation: R   0.885914\r\nformulation: T   0.106905\r\n\r\nInter-individual variation:\r\nformulation: R   0.380248\r\nformulation: T   0.491359\r\nρ:               0.902941   Cov: 0.390294\r\n\r\nConfidence intervals(90%):\r\nformulation: R / formulation: T\r\n35.7036 - 38.2583 (%)\r\nformulation: T / formulation: R\r\n261.3815 - 280.0838 (%)","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"SAS procedures for generated datasets can be found in validation/sas/ folder.","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"All validation datasets (except special - SPX) include in package test procedure.","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"SAS WARNING: Stopped because of infinite likelihood.","category":"page"},{"location":"testval/#Simulation-study-1","page":"Validation","title":"Simulation study","text":"","category":"section"},{"location":"testval/#","page":"Validation","title":"Validation","text":"Following simulation was performed for version v0.1.4:","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"  using Distributions, ReplicateBE\r\n  function simulation(num)\r\n    n   = 0\r\n    err = 0\r\n    cnt = 0\r\n    b = l = log(0.8)\r\n    u = log(1.25)\r\n    println(\"Start...\")\r\n    for i = 1:num\r\n        try\r\n            rds   = ReplicateBE.randrbeds(;n=24, sequence=[1,1], design = [\"T\" \"R\" \"T\" \"R\"; \"R\" \"T\" \"R\" \"T\"], inter=[0.2, 0.2, 0.5], intra=[0.05, 0.05], intercept = 1.0, seqcoef = [0.0, 0.0], periodcoef = [0.0, 0.0, 0.0, 0.0], formcoef = [b, 0.0])\r\n            be    = ReplicateBE.rbe(rds, dvar = :var, subject = :subject, formulation = :formulation, period = :period, sequence = :sequence, memopt = false)\r\n            q     = quantile(TDist(be.fixed.df[6]), 0.95)\r\n            ll    = be.fixed.est[6] - q*be.fixed.se[6]\r\n            ul    = be.fixed.est[6] + q*be.fixed.se[6]\r\n            if ll > l && ul < u cnt += 1 end\r\n            if n > 1000\r\n                println(\"Iteration: $i\")\r\n                println(\"Mem: $(Sys.free_memory()/2^20)\")\r\n                println(\"Pow: $(cnt/i)\")\r\n                println(\"-------------------------------\")\r\n                n = 0\r\n            end\r\n            n += 1\r\n        catch\r\n            err += 1\r\n            println(\"Error $(err)!\")\r\n        end\r\n    end\r\n    return cnt/num\r\nend\r\n\r\nsimulation(100000)","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"Rusults:","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":" 7104.944474 seconds (9.51 G allocations: 2.230 TiB, 44.90% gc time)\r\n0.04939","category":"page"},{"location":"testval/#","page":"Validation","title":"Validation","text":"Cofinence interval (95%) for power: 0.048047 - 0.050733. No statistically significant difference found.","category":"page"},{"location":"examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using CSV, DataFrames, ReplicateBE\r\n\r\n#Load Dataframe...\r\n\r\ndf=CSV.read(IOBuffer(\"\"\"subject,sequence,period,formulation,var\r\n1,1,1,1,1.0\r\n1,1,2,2,1.1\r\n1,1,3,1,1.2\r\n1,1,4,2,1.3\r\n2,1,1,1,2.0\r\n2,1,2,2,2.1\r\n2,1,3,1,2.4\r\n2,1,4,2,2.2\r\n3,2,1,2,1.3\r\n3,2,2,1,1.5\r\n3,2,3,2,1.6\r\n3,2,4,1,1.4\r\n4,2,1,2,1.5\r\n4,2,2,1,1.7\r\n4,2,3,2,1.3\r\n4,2,4,1,1.4\r\n5,2,1,2,1.5\r\n5,2,2,1,1.7\r\n5,2,3,2,1.2\r\n5,2,4,1,1.8\"\"\")) |> DataFrame\r\n\r\n#Execute BE\r\n\r\nbe = ReplicateBE.rbe(df, dvar = :var, subject = :subject, formulation = :formulation, period = :period, sequence = :sequence)\r\n\r\n#Get fixed effect object\r\n\r\nReplicateBE.fixed(be)\r\n\r\n#Get Type III object\r\n\r\nReplicateBE.typeiii(be)\r\n\r\n#Get model coefficients\r\n\r\ncoef(be)\r\n\r\n#Get Standard Error for coefficients\r\n\r\nReplicateBE.coefse(be)\r\n\r\n#Get confidence intervals\r\n\r\nReplicateBE.confint(be, 0.1, expci = false, inv = false)\r\n\r\n#Get -2 REML for model\r\n\r\nReplicateBE.reml2(be)\r\n\r\n#Design information\r\n\r\nReplicateBE.design(be)","category":"page"},{"location":"#ReplicateBE.jl-Documentation-1","page":"Home","title":"ReplicateBE.jl Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"CurrentModule = ReplicateBE","category":"page"},{"location":"#","page":"Home","title":"Home","text":"ReplicateBE.jl is a Julia package providing mixed model solution for replicate designed bioequivalence study. This can be used to obtained results with methods C (random effects with interaction), given by the EMA in Annex I. Statistical model formed with accordance FDA Guidance for Industry: Statistical Approaches to Establishing Bioequivalence, APPENDIX F.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\r\n        \"examples.md\",\r\n        \"syntax.md\",\r\n        \"details.md\",\r\n        \"testval.md\",\r\n        \"struct.md\",\r\n        \"api.md\"]\r\nDepth = 2","category":"page"},{"location":"syntax/#Syntax-1","page":"Syntax","title":"Syntax","text":"","category":"section"},{"location":"syntax/#","page":"Syntax","title":"Syntax","text":"rbe(df; dvar::Symbol,\r\n    subject::Symbol,\r\n    formulation::Symbol,\r\n    period::Symbol,\r\n    sequence::Symbol,\r\n    g_tol::Float64 = 1e-8, x_tol::Float64 = 0.0, f_tol::Float64 = 0.0, iterations::Int = 100,\r\n    store_trace = false, extended_trace = false, show_trace = false,\r\n    memopt = true)","category":"page"},{"location":"syntax/#","page":"Syntax","title":"Syntax","text":"df::DataFrame - DataFrame with data\ndvar::Symbol - variable\nsubject::Symbol - Subject column\nformulation::Symbol - Formulation clumn\nperiod::Symbol - Period column\nsequence::Symbol - Sequence column\ng_tol\nx_tol\nf_tol\niterations:: - Maximum iterations\nstore_trace\nextended_trace\nshow_trace\nmemopt::Bool - memory optimization, can increase performance  ","category":"page"}]
}
