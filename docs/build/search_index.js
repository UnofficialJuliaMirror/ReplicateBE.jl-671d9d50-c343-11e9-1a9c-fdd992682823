var documenterSearchIndex = {"docs":
[{"location":"api/#","page":"Api","title":"Api","text":"#API","category":"page"},{"location":"api/#ReplicateBE.RBE-1","page":"Api","title":"ReplicateBE.RBE","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.RBE","category":"page"},{"location":"api/#Main.ReplicateBE.RBE","page":"Api","title":"Main.ReplicateBE.RBE","text":"Replicate bioequivalence structure.\n\n\n\n\n\n","category":"type"},{"location":"api/#ReplicateBE.rbe-1","page":"Api","title":"ReplicateBE.rbe","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.rbe","category":"page"},{"location":"api/#Main.ReplicateBE.rbe","page":"Api","title":"Main.ReplicateBE.rbe","text":"rbe(df; dvar::Symbol,\n    subject::Symbol,\n    formulation::Symbol,\n    period::Symbol,\n    sequence::Symbol,\n    g_tol::Float64 = 1e-8, x_tol::Float64 = 0.0, f_tol::Float64 = 0.0, iterations::Int = 100,\n    store_trace = false, extended_trace = false, show_trace = false,\n    memopt = true)\n\nMixed model fitting function for replicate bioequivalence.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.coef-1","page":"Api","title":"ReplicateBE.coef","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.coef","category":"page"},{"location":"api/#StatsBase.coef","page":"Api","title":"StatsBase.coef","text":"coef(obj::StatisticalModel)\n\nReturn the coefficients of the model.\n\n\n\n\n\nReturn model coefficients\n\n\n\n\n\ncoef(rbe::RBE)\nReturn model coefficients\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.coef-2","page":"Api","title":"ReplicateBE.coef","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.coef","category":"page"},{"location":"api/#ReplicateBE.coefnum-1","page":"Api","title":"ReplicateBE.coefnum","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.coefnum","category":"page"},{"location":"api/#Main.ReplicateBE.coefnum","page":"Api","title":"Main.ReplicateBE.coefnum","text":"coefnum(rbe::RBE)\nReturn number of coefficients.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.fixed-1","page":"Api","title":"ReplicateBE.fixed","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.fixed","category":"page"},{"location":"api/#Main.ReplicateBE.fixed","page":"Api","title":"Main.ReplicateBE.fixed","text":"fixed(rbe::RBE)\nReturn fixed effect table.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.typeiii-1","page":"Api","title":"ReplicateBE.typeiii","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.typeiii","category":"page"},{"location":"api/#Main.ReplicateBE.typeiii","page":"Api","title":"Main.ReplicateBE.typeiii","text":"typeiii(rbe::RBE)\nReturn type III table.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.confint-1","page":"Api","title":"ReplicateBE.confint","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.confint","category":"page"},{"location":"api/#StatsBase.confint","page":"Api","title":"StatsBase.confint","text":"confint(obj::StatisticalModel; level::Real=0.95)\n\nCompute confidence intervals for coefficients, with confidence level level (by default 95%).\n\n\n\n\n\nconfint(obj::RBE, alpha::Float64; expci::Bool = false, inv::Bool = false, df = :sat)\nReturn confidence intervals for coefficients.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.design-1","page":"Api","title":"ReplicateBE.design","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.design","category":"page"},{"location":"api/#Main.ReplicateBE.design","page":"Api","title":"Main.ReplicateBE.design","text":"design(rbe::RBE)::Design\nReturn design information object.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.contrast-1","page":"Api","title":"ReplicateBE.contrast","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.contrast","category":"page"},{"location":"api/#Main.ReplicateBE.contrast","page":"Api","title":"Main.ReplicateBE.contrast","text":"contrast(rbe::RBE, L::Matrix; numdf = 1, name = \"Contrast\", memopt = true)::ContrastTable\nReturn contrast table for L matrix.\n    ReplicateBE.contrast(rbe::RBE, L::Matrix; numdf = 1, name = \"Contrast\", memopt = true)::ContrastTable\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.estimate-1","page":"Api","title":"ReplicateBE.estimate","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.estimate","category":"page"},{"location":"api/#Main.ReplicateBE.estimate","page":"Api","title":"Main.ReplicateBE.estimate","text":"estimate(rbe::RBE, L::Matrix; name = \"Estimate\", memopt = true, alpha = 0.05)\nReturn estimate table for L 1xp matrix.\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.reml2-1","page":"Api","title":"ReplicateBE.reml2","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.reml2","category":"page"},{"location":"api/#Main.ReplicateBE.reml2","page":"Api","title":"Main.ReplicateBE.reml2","text":"reml2(rbe::RBE, θ::Array{Float64, 1})\nReturm -2REML for rbe model\n\n\n\n\n\nreml2(rbe::RBE)\nReturm -2REML for rbe model\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.lsm-1","page":"Api","title":"ReplicateBE.lsm","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.lsm","category":"page"},{"location":"api/#Main.ReplicateBE.lsm","page":"Api","title":"Main.ReplicateBE.lsm","text":"lsm(rbe::RBE, L::Matrix)\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.emm-1","page":"Api","title":"ReplicateBE.emm","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.emm","category":"page"},{"location":"api/#Main.ReplicateBE.emm","page":"Api","title":"Main.ReplicateBE.emm","text":"emm(obj::RBE, fm::Matrix, lm::Matrix)\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.lmean-1","page":"Api","title":"ReplicateBE.lmean","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.lmean","category":"page"},{"location":"api/#Main.ReplicateBE.lmean","page":"Api","title":"Main.ReplicateBE.lmean","text":"function lmean(obj::RBE)\n\n\n\n\n\n","category":"function"},{"location":"api/#ReplicateBE.randrbeds-1","page":"Api","title":"ReplicateBE.randrbeds","text":"","category":"section"},{"location":"api/#","page":"Api","title":"Api","text":"ReplicateBE.randrbeds","category":"page"},{"location":"api/#Main.ReplicateBE.randrbeds","page":"Api","title":"Main.ReplicateBE.randrbeds","text":"randrbeds(;n=24, sequence=[1,1],\n    design = [\"T\" \"R\" \"T\" \"R\"; \"R\" \"T\" \"R\" \"T\"],\n    inter=[0.5, 0.4, 0.9], intra=[0.1, 0.2],\n    intercept = 0, seqcoef = [0.0, 0.0], periodcoef = [0.0, 0.0, 0.0, 0.0], formcoef = [0.0, 0.0],\n    dropsubj = 0.0, dropobs::Int = 0, seed::Int = 0)\n\nRandom dataset for bioequivalence.\n\n\n\n\n\nrandrbeds(n::Int, sequence::Vector,\n    design::Matrix,\n    θinter::Vector, θintra::Vector,\n    intercept::Real, seqcoef::Vector, periodcoef::Vector, formcoef::Vector,\n    dropsubj::Float64, dropobs::Int, seed::Int)\n\nRandom dataset for bioequivalence.\n\n\n\n\n\n","category":"function"},{"location":"examples/#Basic-using-1","page":"Examples","title":"Basic using","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using CSV, DataFrames, ReplicateBE\r\n\r\n#Load Dataframe...\r\n\r\ndf=CSV.read(IOBuffer(\"\"\"subject,sequence,period,formulation,var\r\n1,1,1,1,1.0\r\n1,1,2,2,1.1\r\n1,1,3,1,1.2\r\n1,1,4,2,1.3\r\n2,1,1,1,2.0\r\n2,1,2,2,2.1\r\n2,1,3,1,2.4\r\n2,1,4,2,2.2\r\n3,2,1,2,1.3\r\n3,2,2,1,1.5\r\n3,2,3,2,1.6\r\n3,2,4,1,1.4\r\n4,2,1,2,1.5\r\n4,2,2,1,1.7\r\n4,2,3,2,1.3\r\n4,2,4,1,1.4\r\n5,2,1,2,1.5\r\n5,2,2,1,1.7\r\n5,2,3,2,1.2\r\n5,2,4,1,1.8\"\"\")) |> DataFrame\r\n\r\n#Execute BE\r\n\r\nbe = ReplicateBE.rbe(df, dvar = :var, subject = :subject, formulation = :formulation, period = :period, sequence = :sequence)\r\n\r\n#Get fixed effect object\r\n\r\nReplicateBE.fixed(be)\r\n\r\n#Get Type III object\r\n\r\nReplicateBE.typeiii(be)\r\n\r\n#Get model coefficients\r\n\r\ncoef(be)\r\n\r\n#Get Standard Error for coefficients\r\n\r\nReplicateBE.coefse(be)\r\n\r\n#Get confidence intervals\r\n\r\nReplicateBE.confint(be, 0.1, expci = false, inv = false)\r\n\r\n#Get -2 REML for model\r\n\r\nReplicateBE.reml2(be)\r\n\r\n#Design information\r\n\r\nReplicateBE.design(be)","category":"page"},{"location":"#ReplicateBE.jl-Documentation-1","page":"Home","title":"ReplicateBE.jl Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"CurrentModule = ReplicateBE","category":"page"},{"location":"#","page":"Home","title":"Home","text":"ReplicateBE.jl is a Julia package providing mixed model solution for replicate designed bioequivalence study. This can be used to obtained results with methods C (random effects with interaction), given by the EMA in Annex I. Statistical model formed with accordance FDA Guidance for Industry: Statistical Approaches to Establishing Bioequivalence, APPENDIX F.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\r\n        \"examples.md\",\r\n        \"syntax.md\",\r\n        \"api.md\"]\r\nDepth = 2","category":"page"},{"location":"syntax/#Syntax-1","page":"Syntax","title":"Syntax","text":"","category":"section"},{"location":"syntax/#","page":"Syntax","title":"Syntax","text":"rbe(df; dvar::Symbol,\r\n    subject::Symbol,\r\n    formulation::Symbol,\r\n    period::Symbol,\r\n    sequence::Symbol,\r\n    g_tol::Float64 = 1e-8, x_tol::Float64 = 0.0, f_tol::Float64 = 0.0, iterations::Int = 100,\r\n    store_trace = false, extended_trace = false, show_trace = false,\r\n    memopt = true)","category":"page"},{"location":"syntax/#","page":"Syntax","title":"Syntax","text":"df::DataFrame - DataFrame with data\ndvar::Symbol - variable\nsubject::Symbol - Subject column\nformulation::Symbol - Formulation clumn\nperiod::Symbol - Period column\nsequence::Symbol - Sequence column\ng_tol\nx_tol\nf_tol\niterations:: - Maximum iterations\nstore_trace\nextended_trace\nshow_trace\nmemopt::Bool - memory optimization using Memoize.jl, can increase performance, but also can lead to memory leak in simulation tasks   ","category":"page"}]
}
