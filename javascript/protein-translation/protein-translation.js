//Set up a hash map of Codon/ Protein pairs

const codonMap = new Map();

codonMap.set('AUG','Methionine');
codonMap.set('UUU','Phenylalanine');
codonMap.set('UUC','Phenylalanine');
codonMap.set('UUA','Leucine');
codonMap.set('UUG','Leucine');
codonMap.set('UCU','Serine');
codonMap.set('UCC','Serine');
codonMap.set('UCA','Serine');
codonMap.set('UCG','Serine');
codonMap.set('UAU','Tyrosine');
codonMap.set('UAC','Tyrosine');
codonMap.set('UGU','Cysteine');
codonMap.set('UGC','Cysteine');
codonMap.set('UGG','Tryptophan');
codonMap.set('UAA','STOP');
codonMap.set('UAG','STOP');
codonMap.set('UGA','STOP');


export const translate = (rnaSequence) => {
  let proteins = [];

  //If no sequence is given, we can end here.
  if(!rnaSequence){
    return proteins
  }

  //loop over the rnaSequence in groups of 3
  for (let i = 0; i < rnaSequence.length; i+=3) {
    let codon = `${rnaSequence[i]}${rnaSequence[i+1]}${rnaSequence[i+2]}`;
    let protein = codonMap.get(codon)
    if(!protein) throw new Error(`Invalid codon`);
    if (protein === 'STOP') break;
    proteins.push(protein);
  }

  return proteins


}
